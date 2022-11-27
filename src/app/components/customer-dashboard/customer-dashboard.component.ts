import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {
  name:string = sessionStorage.getItem('email') as string
  showEditMenu:boolean = false
  constructor() { }

  ngOnInit(): void {
  }

}
