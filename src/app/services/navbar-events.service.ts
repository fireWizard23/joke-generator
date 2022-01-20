import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarEventsService {

  private _filterToggleState = false;
  private _filterToggleEvent = new Subject<boolean>();

  get toggleStateChanges() : Observable<boolean> {
    return this._filterToggleEvent.asObservable();
  }

  public toggleFilterButton() {
    this._filterToggleState = !this._filterToggleState;
    this._filterToggleEvent.next(this._filterToggleState);
  }

  constructor() { }




}
