import {  Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {  Observable, pairwise,  } from 'rxjs';
import { AnyTypeJoke, isMultipleJokes, MultipleJokes } from 'src/app/misc/joke.model';
import { JokeHttpService } from 'src/app/services/joke-http-service/joke-http.service';
import { differenceWith, isEqual, } from 'lodash'
@Component({
  selector: 'app-joke-filter',
  templateUrl: './joke-filter.component.html',
  styleUrls: ['./joke-filter.component.scss']
})
export class JokeFilterComponent  {

  joke!: Observable<AnyTypeJoke | MultipleJokes>;
  constructor(private http: JokeHttpService, private _ar: ActivatedRoute, private _router: Router) { }



  isMultipleJokes(s: any) : s is MultipleJokes {
    return isMultipleJokes(s)
  }

  handleUrl(v: any) {
    const categories = Object.keys(v.categories).reduce((result: any[], key) => {
      result.push(key)
      return result;
    }, [] );

    delete v.categories;

    this.joke = this.http.getAdvanced(categories, v);
  }

  handleSubmit(_value: any) {
    console.log(_value)
    const value = JSON.parse(JSON.stringify(_value))

    const categories = value.categories.reduce((result: string[], item: any) => {
      item.value === true && result.push(item.name)
      return result;
    }, []).toString()

    delete value.categories;
    value.blacklistFlags = value.blacklistFlags.reduce((result: any[], v: any) => {
      v.value && result.push(v.name)
      return result;
    }, []).toString()

    value.type = value.type.reduce((result: any[], v: any) => {
      v.value && result.push(v.name)
      return result;
    }, []).toString()

    value.idRange = value.idRange.oneNumber ? (value.idRange["min"] || value.idRange["max"] || "null")?.toString() :`${value.idRange["min"]}-${value.idRange["max"]}`

    
    if(value.idRange.toLowerCase().includes("null")) {
      delete value.idRange;
    }

    
    const valueToSubmit = {categories, ...value}
    console.log("VALUE TO SUBMIT", valueToSubmit)
    this._router.navigate([], {
      relativeTo: this._ar,
      queryParams: valueToSubmit,
      queryParamsHandling: "merge"
    }) 
  }


}



