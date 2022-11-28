import { Component, Input, OnInit } from '@angular/core';
import { Customer } from 'src/app/interfaces/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-card-mobile',
  templateUrl: './customer-card-mobile.component.html',
  styleUrls: ['./customer-card-mobile.component.css']
})
export class CustomerCardMobileComponent implements OnInit {
showEditMenu:boolean = false
customerArr!:Customer[]
@Input() customer!:Customer
  constructor() { }

  ngOnInit(): void {
  }

}
