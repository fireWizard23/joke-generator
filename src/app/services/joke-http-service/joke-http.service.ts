import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import {TwoPartJoke,Joke, SingleJoke, JokeCategory, JokeType} from '../../misc/joke.model';



@Injectable({
  providedIn: 'root'
})
export class JokeHttpService  {

  private _currentJoke: Subject<Joke> = new ReplaySubject();

  private _hasJoke = false;

  get currentJoke() {
      return this._currentJoke;
  }

  get hasJoke(){
    return this._hasJoke;
  }

  constructor(protected http : HttpClient ) {
    this.refreshCurrentJoke();
  }

  public refreshCurrentJoke() {
    let random = Math.random();
    this._hasJoke = true;
    if(random > 0.5) {
      this.getSingleJoke()
        .subscribe((v) => {
          this._currentJoke.next(v);
        })
    } else {
      this.getTwoPartJoke()
        .subscribe((v) => {
          this._currentJoke.next(v);
        })
    }
  }

  public getSingleJoke(category: JokeCategory='any') : Observable<SingleJoke> {
    return this.getRandomJoke<SingleJoke>('single', category) ;
  }


  public getTwoPartJoke(category: JokeCategory='any') : Observable<TwoPartJoke> {
    return this.getRandomJoke<TwoPartJoke>('twopart', category) ;
  }
  
  public getJokeById(id: number) : Observable<Joke> {
    let url = this.combineUrl(env.JOKE_URL, 'any');
    let params = new HttpParams().set('idRange', id);

    return this.http.get<Joke>(url, {params});
  }


  private getRandomJoke<T extends Joke>(type: JokeType, category: JokeCategory) : Observable<T> {

    let params = new HttpParams().set('type', type);
    let url = this.combineUrl(env.JOKE_URL, category);

    return this.http.get<T>(url, { params });

  } 

  private getByUrl<T extends object>(url: string) : Observable<T> {
    // let params = new HttpParams().set('type', 'single');
    return this.http.get<T>(this.combineUrl(env.JOKE_URL, url));
  }

  private combineUrl(url1: string, url2: string ) : string {
    const slash = '/';
    const firstUrlEndsWithSlash = url1.endsWith(slash);
    const secondUrlStartsWithSlash = url2.startsWith(slash);


    if(!firstUrlEndsWithSlash && !secondUrlStartsWithSlash)
      url1 += slash;
    
      return url1 + url2;

  }


}
function tap(tap: any) {
  throw new Error('Function not implemented.');
}

