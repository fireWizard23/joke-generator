import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../http-service/http-service.service';
import { environment as env } from 'src/environments/environment';
import { HttpParams } from '@angular/common/http';
import {TwoPartJoke,Joke, SingleJoke, JokeCategory, JokeType} from '../../misc/joke.model';



@Injectable({
  providedIn: 'root'
})
export class JokeHttpService extends HttpService {


  public getSingleJoke(category: JokeCategory='any') : Observable<SingleJoke> {
    return this.getJoke<SingleJoke>('single', category) ;
  }


  public getTwoPartJoke(category: JokeCategory='any') : Observable<TwoPartJoke> {
    return this.getJoke<TwoPartJoke>('twopart', category) ;
  }

  private getJoke<T extends Joke>(type: JokeType, category: JokeCategory) : Observable<T> {

    let params = new HttpParams().set('type', type);
    let url = this.combineUrl(env.JOKE_URL, category);

    return this.http.get<T>(url, {
      params
    });

  } 


}
