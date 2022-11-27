import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
showOffCanvas:boolean = false
  constructor() { }

  ngOnInit(): void {
  }
  changeHide(val: boolean) {
    this.showOffCanvas = val;
  }
}
