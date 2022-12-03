import { Component, OnInit } from '@angular/core';
import {trigger,state,style,animate,transition,} from '@angular/animations';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css'],
  animations: [
    trigger('fade',[
      transition(':enter',[
        style({opacity:0}),
        animate('0.25s',style({opacity:1}))
      ]),
      transition(':leave',[
        style({opacity:1}),
        animate('0.5s',style({opacity:0}))
      ]),
    ])
  ]
})
export class EmployeeDashboardComponent implements OnInit {
  name: string = sessionStorage.getItem('email') as string;
  constructor() { }

  ngOnInit(): void {
  }

}
