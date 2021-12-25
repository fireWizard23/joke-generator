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
  jokeString!: string | null;
  
  private _jokeSubscription!: Subscription;

  id!: number;

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
    this.httpService.onJokeChange$.subscribe((v) => {
      this._router.navigate(["joke", v.id])
    })
    this._activatedRoute.params
      .subscribe((params) => {
        const id = Number(params.id);
        if(Number.isNaN(id)) {
          this.jokeString = "Look at the you are L"
          this.joke = {
            category: "pun",
            error: true,
            explicit: false,
            flags: {
              nsfw: false,
              political: false,
              racist: false,
               religious: false,
               sexist: false
            },
            id,
            lang: "Yo Mama",
            safe: true,
            type: "single"
          }
          return;
        }
        this._jokeSubscription = this.httpService.getById(id)
          .subscribe((joke) => {
            if(joke == null) {
              return;
            }
            this.joke = joke;
            this.jokeString = getJokeString(joke)
          })

      })
  }


  handleClick() {
    this.jokeString = null;
    
    this.httpService.changeCurrentJoke(); 
  }



}
