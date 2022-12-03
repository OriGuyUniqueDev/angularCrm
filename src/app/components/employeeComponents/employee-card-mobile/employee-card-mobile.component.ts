import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/interfaces/employee';
import {trigger,state,style,animate,transition,} from '@angular/animations';
@Component({
  selector: 'app-employee-card-mobile',
  templateUrl: './employee-card-mobile.component.html',
  styleUrls: ['./employee-card-mobile.component.css'],
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
export class EmployeeCardMobileComponent implements OnInit {
@Input() employee:Employee = {firstname:'',lastname:'',role:'',dateOfBirth:new Date(),email:'',managerOf:[''],moto:'',phone:'',profileImg:''}

  constructor() { }

  ngOnInit(): void {
    
  }

}
