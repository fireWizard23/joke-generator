import { Component, HostListener, OnInit } from '@angular/core';
import { NavbarEventsService } from 'src/app/services/navbar-events.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  // innerWidth!: number;


  constructor(private _navService: NavbarEventsService) {

  }

  ngOnInit(): void {
  }

  handleClick() : void {
    this._navService.toggleFilterButton();
  }





}
