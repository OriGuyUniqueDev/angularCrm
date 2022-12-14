import { Component, HostListener, OnInit } from '@angular/core';
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
  innerWidth: any;
  employeesArr!:Employee[]
  showLoader: boolean = true;
  search:string = ''
  constructor(private es:EmployeeService) { }
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
  }
  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.es.getAllEmployees().subscribe((employeesData:Employee[]) => {
      this.employeesArr = employeesData
      this.showLoader = false
    })
  }

}
