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
isAdded:boolean = false
isChecked:boolean = false
  constructor(private cs:CustomerService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.customer = window.history.state       
  }
  enableEdit(data:any){
    if(typeof data.target.checked === 'boolean'){
      this.isChecked = data.target.checked
    }
    let inputArr = document.querySelectorAll('input[type="text"],textArea,input[type="email"]')
    if(data.target.checked === true){
      inputArr.forEach((input) => {
        input.removeAttribute('disabled')        
      })
    }else{
      inputArr.forEach((input) => {
        input.setAttribute('disabled','true')        
      })
    }
  }
  editData(){
    this.cs.updateCustomer(this.customer).then(() => {
      this.isAdded = true
      setTimeout(() => {
        this.isAdded = false
      }, 3000);
    })
    }
}
