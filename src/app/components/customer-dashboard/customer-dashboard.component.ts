import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/interfaces/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {
  name:string = sessionStorage.getItem('email') as string
  showEditMenu:boolean = false
  customerArr!:Customer[]
  constructor(private cs:CustomerService) { }

  ngOnInit(): void {
    this.getAllData()
  }
  getAllData(){
    this.cs.getAllCustomers().subscribe((data:Customer[]) => {
      this.customerArr = data
      console.log(data);
      
    })
  }
}
