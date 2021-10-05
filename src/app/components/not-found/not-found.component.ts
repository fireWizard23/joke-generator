import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MetaService } from 'src/app/services/meta-services/meta.service';


type PageError = 'id' | 'notfound';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {


  message!: string;

  constructor(private _activatedRoute: ActivatedRoute, private _metaService: MetaService) { }

  ngOnInit(): void {
    this._activatedRoute.queryParams.subscribe((params) => {
      let error = params.error as PageError;

      if(error === 'id') {
        this.message = `Error: Id: ${params.id} is not found. Please check if it is a valid id.`
      } else {
        this.message = 'Error404. Page not found.'
      }
      this._metaService.updateTitle(this.message, true);
    })

  }

}
