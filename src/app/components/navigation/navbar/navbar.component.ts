import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { OffCanvasComponent } from '../off-canvas/off-canvas.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger('slide',[
      transition(':enter',[
        style({right:-200}),
        animate('0.25s',style({right:0}))
      ]),
      transition(':leave',[
        style({right:0}),
        animate('0.5s',style({right:-200}))
      ]),
    ])
  ]
})
export class NavbarComponent implements OnInit {
showOffCanvas:boolean = false
  constructor(private offCanvas:NgbOffcanvas) { }

  ngOnInit(): void {
  }
  changeHide(val: boolean) {
    this.showOffCanvas = val;
  }
  openOffCanvas(){
    this.offCanvas.open(OffCanvasComponent,{position:'end'})
  }
}
