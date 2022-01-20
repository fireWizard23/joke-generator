import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { JokeFilterComponent } from './components/joke-filter/joke-filter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  
  
  title = 'Joke Generator - Home';

  date = new Date().getFullYear();



}
