import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, ReplaySubject, Subject } from 'rxjs';
import {shareReplay, tap} from 'rxjs/operators'
import { environment as env } from 'src/environments/environment';
import { HttpClient, HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';
import {TwoPartTypeJoke,Joke, SingleTypeJoke, JokeCategory, JokeType, JokeFlags, JokeLang, AnyTypeJoke} from '../../misc/joke.model';
import { Map } from 'immutable';
import { ActivatedRoute } from '@angular/router';
import {cloneDeep} from 'lodash'


type JokeUrlOptions = {
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
  withCredentials?: boolean;
};

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

  public changeCurrentJoke(filters?: any) {
    if(!filters || Object.keys(filters).length == 0) {
      this.getRandomJoke(); 
      return;
    }
    filters = parseFiltersToUrlParams(filters);

    this.getAdvanced(filters.categories, filters)
      .subscribe((v) => {
        this._onJokeChange$.next(v);
        this.currentJoke = v;
      })

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
      idRange: id.toString()
    })
  }

  public getAdvanced<T extends AnyTypeJoke>(category: JokeCategory[], opts: JokeUrlParams): Observable<T> {
    const _opts = parseFiltersToUrlParams(opts) as any;
    let params = new HttpParams();
    delete _opts.categories;
    for(const key in _opts) {
      let currentValue = _opts[key];
      
      params = params.set(key, currentValue);
    }

    
    return this.get<T>(category, {params});
  }

  private get<T extends AnyTypeJoke>(category: JokeCategory[], opt: 
    JokeUrlOptions
    ): Observable<T> {
    let index = 1;
    const url = this.combineUrl(env.JOKE_URL, category.toString())
    
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

export function parseFiltersToUrlParams(_filters: JokeUrlParams & {[key: string] : any}, deleteFalsyValues=true) : object{
  const filters = cloneDeep(_filters);

  if(typeof filters.idRange != "string" && filters.idRange != undefined) {
    if(filters.idRange?.oneNumber) {
      filters.idRange = filters.idRange.min?.toString();
    } else {
      filters.idRange = `${filters.idRange?.min}-${filters.idRange?.max}`
    }
  }

  for(const key in filters) {
    let currentValue = filters[key];
    if(currentValue == null ) {
      deleteFalsyValues && delete filters[key]
      continue;
    }
    if( currentValue == "" || Object.keys(currentValue).length == 0) {
      filters[key] = null;
      deleteFalsyValues && delete filters[key]
      continue;
    }
    if(typeof currentValue === "object") {
      const keys = Object.keys(currentValue).filter((k) => currentValue[k] === true);

      if(keys.length == 0) {
        continue;
      }
      currentValue = keys.toString();
    }
    filters[key] = currentValue;
  }

  return filters;
}

export interface JokeUrlParams {
  type?: JokeType;
  blackListFlags?: JokeFlags;
  lang?: JokeLang;
  idRange?: string | { min: number, max: number, oneNumber: boolean};
  contains?: string;
  amount?:number;
  isSafe?: boolean;
}

