import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AnyTypeJoke, getJokeString, isJokeError, Joke, JokeError } from 'src/app/misc/joke.model';
import { JokeFiltersService } from 'src/app/services/joke-filters.service';
import { JokeHttpService, parseFiltersToUrlParams } from 'src/app/services/joke-http-service/joke-http.service';
import { MetaService } from 'src/app/services/meta-services/meta.service';

@Component({
  selector: 'app-joke-page',
  templateUrl: './joke-page.component.html',
  styleUrls: ['./joke-page.component.scss']
})
export class JokePageComponent implements OnInit, OnDestroy {

  joke!: AnyTypeJoke;
  jokeError!: JokeError;

  isLoading = true;
  
  private _jokeSubscription!: Subscription;

  private filters = {};

  id!: number;

  constructor(
    private _router: Router,
    private _activatedRoute : ActivatedRoute,
    private httpService: JokeHttpService,
    private _metaService : MetaService ,
    private _jokeFilters : JokeFiltersService
      ) { }

  ngOnDestroy(): void {
    this._jokeSubscription?.unsubscribe();
  }

  ngOnInit(): void {
    this._jokeFilters.filterChanges.subscribe((filters: any) => {
      this.filters = filters;
      this._router.navigate(["joke"], {
        queryParams: parseFiltersToUrlParams(filters, false),
        queryParamsHandling: "merge"
      })
    })

    this._jokeSubscription = this.httpService.onJokeChange$
      .subscribe((joke) => {
        if(joke == null) {
          return;
        }
        if(isJokeError(joke)) {
          this.jokeError = joke;
          return;
        }
        this.isLoading = false;
        this.joke = joke;
        this._metaService.setDescription(getJokeString(joke)!)
        this._metaService.updateTitle(joke.id.toString());
      })

    this.httpService.changeCurrentJoke(this.filters);

  }

  

  handleClick() {
    this.isLoading = true;
    this.httpService.changeCurrentJoke(this.filters); 
  }



}
