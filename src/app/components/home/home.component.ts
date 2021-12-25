import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild, ViewChildren} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { JokeHttpService} from 'src/app/services/joke-http-service/joke-http.service';
import {TwoPartJoke,Joke, SingleJoke, getJokeString} from '../../misc/joke.model';
import { Title } from '@angular/platform-browser';
import { MetaService } from 'src/app/services/meta-services/meta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  template: '',
  styles: ['']
})
export class HomeComponent implements OnInit, OnDestroy {

  jokeSubscription!: Subscription;
  
  constructor(private httpService : JokeHttpService, private _router: Router) {}


  ngOnDestroy(): void {
    this.jokeSubscription?.unsubscribe();
  }


  ngOnInit(): void {
    this.jokeSubscription = this.httpService.onJokeChange$
      .subscribe((v) => {
        if(v === null) {return}
        this._router.navigate(["joke", v.id]) 
      })
      this.httpService.getRandomJoke()
  } 

  
  


}
