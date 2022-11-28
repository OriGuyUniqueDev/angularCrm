import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/interfaces/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-card-mobile',
  templateUrl: './customer-card-mobile.component.html',
  styleUrls: ['./customer-card-mobile.component.css']
})
export class CustomerCardMobileComponent implements OnInit {
name:string = 'Ori Guy'
tel:string = '0547520899'
email:string = 'origuy2021@gmail.com'
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
