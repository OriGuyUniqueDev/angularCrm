import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/interfaces/employee';

@Component({
  selector: 'app-employee-card-mobile',
  templateUrl: './employee-card-mobile.component.html',
  styleUrls: ['./employee-card-mobile.component.css']
})
export class EmployeeCardMobileComponent implements OnInit {
@Input() employee:Employee = {firstname:'',lastname:'',role:'',dateOfBirth:new Date(),email:'',managerOf:[''],moto:'',phone:'',profileImg:''}

  constructor() { }

  ngOnInit(): void {
    
  }

}
