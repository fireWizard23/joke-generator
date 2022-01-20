import {  AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {  Observable, pairwise,  } from 'rxjs';
import { AnyTypeJoke, isMultipleJokes, MultipleJokes } from 'src/app/misc/joke.model';
import { JokeHttpService } from 'src/app/services/joke-http-service/joke-http.service';
import { differenceWith, isEqual, cloneDeep } from 'lodash'
import { NavbarEventsService } from 'src/app/services/navbar-events.service';
import { JokeFiltersService } from 'src/app/services/joke-filters.service';
import { JokeFilterFormComponent } from '../joke-filter-form/joke-filter-form.component';

@Component({
  selector: 'app-joke-filter',
  templateUrl: './joke-filter.component.html',
  styleUrls: ['./joke-filter.component.scss']
})
export class JokeFilterComponent implements OnInit, AfterViewInit  {

  @ViewChild(JokeFilterFormComponent, {static: false}) filterForm!: JokeFilterFormComponent;

  isHidden = true;

  constructor (private navService: NavbarEventsService, private _jokeFilters: JokeFiltersService,
    private _ar: ActivatedRoute, private _router: Router, private cd: ChangeDetectorRef) {}


  ngAfterViewInit(): void {
    this._ar.queryParams.subscribe((params) => {

      const obj =  parseUrlParamsToFilters(params);

      this.filterForm.patchFormValue(obj)

    });
  }

  ngOnInit(): void {
    this.navService.toggleStateChanges.subscribe((v) => {
      this.isHidden = v;
      this.cd.detectChanges()
    })
  }

  handleSubmit(val: any) {
    const e = val._value;

    this._jokeFilters.changeFilters(e);
    val.toggle && this.navService.toggleFilterButton()
  }

  

}


export type Keyable = {
  [key: string]: any;
};

function parseUrlParamsToFilters(params: Keyable):  {
  categories: Keyable;
  blacklistFlags: Keyable;
  type: Keyable;
  contains: string | object;
  language: string | object;
  idRange: string | object;
  amount: string | object;
} {
  const checklists = [
    "categories",
    "blacklistFlags",
    "type",
  ]
  const parsedParams = cloneDeep(
    [
      ...checklists,
      "contains",
      "language",
      "idRange",
      "amount"
    ].reduce((result: any, item: string) => {
      const currentItem = params[item];
      if (currentItem == null || currentItem == "") {
        return result;
      }
  
      result[item] = currentItem;
  
      return result;
    }, {})
  );

  checklists.forEach((v) => {

    if(parsedParams[v] && typeof parsedParams[v] == "string") {
      const parsedValue = (parsedParams[v] as string).split(",")
      .reduce((result: any, item: any) => {
        result[item] = true;
        return result;
      }, {});
      parsedParams[v] = parsedValue;
    }
    
  })

  if(parsedParams.idRange) {
    let [min, max] = (parsedParams?.idRange as string)?.split("-");

    if(!(parsedParams.idRange as string).includes("-")) {
      max = min;
    }
    parsedParams.idRange = {
      min,
      max,
      oneNumber: min == max
    }        
  }

  return parsedParams;
}



