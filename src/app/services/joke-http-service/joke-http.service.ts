import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, ReplaySubject, Subject } from 'rxjs';
import {shareReplay, tap} from 'rxjs/operators'
import { environment as env } from 'src/environments/environment';
import { HttpClient, HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';
import {TwoPartTypeJoke,Joke, SingleTypeJoke, JokeCategory, JokeType, JokeFlags, JokeLang, AnyTypeJoke} from '../../misc/joke.model';
import { Map } from 'immutable';
import { ActivatedRoute } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class JokeHttpService  {


  currentJoke?: Joke;

  _cachedJokes = Map();

  private _onJokeChange$ = new Subject<AnyTypeJoke>();

  public get onJokeChange$() : Observable<AnyTypeJoke> {
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

  public getSingleJoke(category: JokeCategory='any') : Observable<SingleTypeJoke> {
    return this.getJoke<SingleTypeJoke>('single', category) ;
  }


  public getTwoPartJoke(category: JokeCategory='any') : Observable<TwoPartTypeJoke> {
    return this.getJoke<TwoPartTypeJoke>('twopart', category) ;
  }

  public getJoke<T extends AnyTypeJoke>(type: JokeType, category: JokeCategory) : Observable<T> {

    return this.getAdvanced<T>([category], {
      type
    })
  } 

  public getById<T extends AnyTypeJoke = AnyTypeJoke>(id: number): Observable<AnyTypeJoke> {
    const joke = this._cachedJokes.get(id);
    if(joke != undefined) {
      return of(joke as AnyTypeJoke);
    }

    return this.getAdvanced<T>(['any'], {
      idRange: id
    })
  }

  public getAdvanced<T extends AnyTypeJoke>(category: JokeCategory[], opts: JokeUrlParams): Observable<T> {
    const _opts = opts as any;
    let params = new HttpParams();
    for(const key in _opts) {
      let currentValue = _opts[key];
      if(typeof currentValue === "object") {
        let str = "";
        
        const keys = Object.keys(currentValue).filter((k) => {
          return currentValue[k] === true;
        });

        if(keys.length == 0) {
          continue;
        }
        
        keys.forEach((v, index) => {
          str += v;
          if(index < keys.length - 1) {
            str += ','
          }
        })
        currentValue = str;
      }

      params = params.set(key, currentValue);
    }

    
    return this.get<T>(category, {params});
  }

  private get<T extends AnyTypeJoke>(category: JokeCategory[], opt: 
    {
      headers?: HttpHeaders | {
          [header: string]: string | string[];
      };
      context?: HttpContext;
      observe?: 'body';
      params?: HttpParams | {
          [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
      };
      reportProgress?: boolean;
      responseType?: 'json';
      withCredentials?: boolean; }
    ): Observable<T> {
    let index = 1;
    const url = this.combineUrl(env.JOKE_URL, category.reduce((result, v: any) => {
      result += v;
      if(index < category.length) {
        console.log(index, category.length)
        result += ','
      }
      index++;
      return result;
    }, ""))
    
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

export interface JokeUrlParams {
  type?: JokeType;
  blackListFlags?: JokeFlags;
  lang?: JokeLang;
  idRange?: number;
  contains?: string;
  amount?:number;
  isSafe?: boolean;
}

