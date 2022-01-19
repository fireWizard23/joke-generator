import { Component, Input, OnInit } from '@angular/core';
import { Joke } from 'src/app/misc/joke.model';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent  {
  @Input() joke!: Joke;
  @Input() listType?:boolean = true;
  constructor() { }

}
