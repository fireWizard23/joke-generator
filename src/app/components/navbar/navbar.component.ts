import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  innerWidth!: number;

  @HostListener('window:resize')
  onResize() {
    this.innerWidth = window.innerWidth;
  }

  constructor() { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }





}
