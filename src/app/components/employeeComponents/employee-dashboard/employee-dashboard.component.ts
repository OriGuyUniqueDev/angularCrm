import { Component, OnInit } from '@angular/core';
import {trigger,state,style,animate,transition,} from '@angular/animations';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/interfaces/employee';

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
  employeesArr!:Employee[]
  constructor(private es:EmployeeService) { }

  ngOnInit(): void {
    this.es.getAllEmployees().subscribe((employeesData) => {
      this.employeesArr = employeesData
    })
  }

}
