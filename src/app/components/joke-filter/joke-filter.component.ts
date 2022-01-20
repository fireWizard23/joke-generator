import {  Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {  Observable, pairwise,  } from 'rxjs';
import { AnyTypeJoke, isMultipleJokes, MultipleJokes } from 'src/app/misc/joke.model';
import { JokeHttpService } from 'src/app/services/joke-http-service/joke-http.service';
import { differenceWith, isEqual, } from 'lodash'
import { NavbarEventsService } from 'src/app/services/navbar-events.service';
import { JokeFiltersService } from 'src/app/services/joke-filters.service';
@Component({
  selector: 'app-joke-filter',
  templateUrl: './joke-filter.component.html',
  styleUrls: ['./joke-filter.component.scss']
})
export class JokeFilterComponent implements OnInit  {

  isShown = false;

  constructor (private navService: NavbarEventsService, private _jokeFilters: JokeFiltersService) {}

  ngOnInit(): void {
    this.navService.toggleStateChanges.subscribe((v) => {
      this.isShown = v;
    })
  }

  handleSubmit(e: any) {
    this._jokeFilters.changeFilters(e);
    this.navService.toggleFilterButton()
  }

  

}



