import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MetaService {

  private readonly TITLE_PREFIX = 'Joke Generator - '

  constructor(private _titleService: Title, private _meta : Meta) { }

  public updateTitle(title: string, fullTitle:boolean = false) {
    if(!fullTitle) {
      this._titleService.setTitle(this.TITLE_PREFIX + title);
    }
    else {
      this._titleService.setTitle(title);
    }
  }

  public setDescription(desc: string) {

    this._meta.updateTag({
      name: 'description',
      content: desc
    })
  }

  public setKeywords(keywords: string) {
    this._meta.updateTag({
      name: 'keywords',
      content: keywords
    })
  }

}
