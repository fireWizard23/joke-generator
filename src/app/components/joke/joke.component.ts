import { Component, Input, OnInit } from '@angular/core';
import { AnyTypeJoke, Joke, JokeError, JokeRequest } from 'src/app/misc/joke.model';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent  {
  @Input() joke!: JokeRequest;
  @Input() listType?:boolean = true;

  isJokeError(joke: JokeRequest) : joke is JokeError{
    return (joke as any)?.error != undefined;
  }

  constructor() { }

}
