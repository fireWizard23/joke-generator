import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JokeFiltersService {

  private _filters = {};
  private _filterChanges = new Subject();

  get filters() {
    return this._filters;
  }

  get filterChanges() {
    return this._filterChanges.asObservable();
  }



  constructor() { }


  changeFilters(a: object) {
    this._filters = a;
    this._filterChanges.next(a);
  }



}
