import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment as env } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'

})
export class HttpService {

  constructor(protected http : HttpClient ) { }

  /**
   * @param  {string} url - the relative path to the url
   */
  getByUrl<T extends object>(url: string) : Observable<T> {
    // let params = new HttpParams().set('type', 'single');
    return this.http.get<T>(this.combineUrl(env.JOKE_URL, url));
  }

  protected combineUrl(url1: string, url2: string ) : string {
    const slash = '/';
    const firstUrlEndsWithSlash = url1.endsWith(slash);
    const secondUrlStartsWithSlash = url2.startsWith(slash);


    if(!firstUrlEndsWithSlash && !secondUrlStartsWithSlash)
      url1 += slash;
    
      return url1 + url2;

  }


}
