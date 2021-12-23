import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { getJokeString, Joke, JokeError, jokeToError } from 'src/app/misc/joke.model';
import { JokeHttpService } from 'src/app/services/joke-http-service/joke-http.service';
import { MetaService } from 'src/app/services/meta-services/meta.service';

@Component({
  selector: 'app-joke-page',
  templateUrl: './joke-page.component.html',
  styleUrls: ['./joke-page.component.scss']
})
export class JokePageComponent implements OnInit, OnDestroy {

  joke!: Joke;
  jokeError!: JokeError;
  
  private _jokeSubscription!: Subscription;

  constructor(
    private _router: Router,
    private _activatedRoute : ActivatedRoute,
    private httpService: JokeHttpService,
    private _metaService : MetaService 
      ) { }

  ngOnDestroy(): void {
    this._jokeSubscription?.unsubscribe();
  }

  ngOnInit(): void {


    this._activatedRoute.params.subscribe((val) => {

      const id:number = Number(val.id);

      console.log(id, id == NaN);

      this._metaService.updateTitle(`${val.id}`);


      if(Number.isNaN(id)) {
        this._router.navigateByUrl(`/error?error=id&id=${val.id}asdf`)
        return;
      }


      this._jokeSubscription = (
        id !== this.httpService.currentJoke?.id ? 
        this.httpService.getJokeById(id)
         : this.httpService.currentJoke$
      ).subscribe((joke) => {
        
        if(joke.error) {
          this.jokeError = jokeToError(joke);
          return;
        }


        this.joke = joke;
        const jokeString = getJokeString(joke);
        if(jokeString != null) {
          this._metaService.setDescription(jokeString.substring(0,30) + '...' + `Get more jokes using JokeGenerator. Joke Generator uses the JokeAPI to get the best jokes possible`);
          this._metaService.setKeywords(this.joke.category);
        }

      });
    });

  }




}
