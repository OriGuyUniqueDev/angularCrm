import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Customer } from 'src/app/interfaces/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-page',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.css']
})
export class CustomerPageComponent implements OnInit {
customer:Customer = {firstname:'',lastname:'',phone:'',email:'',extra:''}
  constructor(private cs:CustomerService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.customer = window.history.state   
    console.log(this.customer);
    
  }

}
