import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, ReplaySubject, Subject } from 'rxjs';
import {shareReplay, tap} from 'rxjs/operators'
import { environment as env } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import {TwoPartJoke,Joke, SingleJoke, JokeCategory, JokeType} from '../../misc/joke.model';
import { Map } from 'immutable';
import { ActivatedRoute } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class JokeHttpService  {


  currentJoke?: Joke;

  _cachedJokes = Map();

  private _onJokeChange$ = new Subject<Joke>();

  public get onJokeChange$() {
    return this._onJokeChange$.asObservable();
  }

  constructor(protected http : HttpClient, _activatedRoute: ActivatedRoute ) {
    _activatedRoute.params.subscribe((param) => {
      const id = param.id;
      if(id != null) {
        return;
      }
      this.getById(Math.round(Math.random()))
        .subscribe((joke) => {
          this.currentJoke = joke;
        })
    })
  }

  public changeCurrentJoke() {
    this.getRandomJoke();
  }

  public getRandomJoke() {
    const random = Math.random();
    if (random > 0.5) {
      this.getSingleJoke().subscribe((v) => {
        this._onJokeChange$.next(v);
        this.currentJoke = v;
      });
    } else {
      this.getTwoPartJoke().subscribe((v) => {
        this._onJokeChange$.next(v);
        this.currentJoke = v;
      });
    }
  }

  public getSingleJoke(category: JokeCategory='any') : Observable<SingleJoke> {
    return this.getJoke<SingleJoke>('single', category) ;
  }


  public getTwoPartJoke(category: JokeCategory='any') : Observable<TwoPartJoke> {
    return this.getJoke<TwoPartJoke>('twopart', category) ;
  }

  public getJoke<T extends Joke>(type: JokeType, category: JokeCategory) : Observable<T> {

    let params = new HttpParams().set('type', type);
    let url = `${category}`;
    return this.get<T>(url, { params });

  } 

  public getById<T extends Joke = Joke>(id: number) {
    const joke = this._cachedJokes.get(id);
    if(joke != undefined) {
      return of(joke as Joke);
    }

    let params = new HttpParams().set('idRange', id);

    return this.get<T>('any', {params});
  }

  private get<T extends Joke>(relativeUrl: string, opt: {}) {
    const url = this.combineUrl(env.JOKE_URL, relativeUrl)
    return this.http.get<T>(url, opt)
      .pipe(
        shareReplay(),
        tap((v) => {
          this._cachedJokes= this._cachedJokes.set(v.id, v);
        })
      );
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


