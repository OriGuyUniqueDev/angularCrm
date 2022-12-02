import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Customer } from 'src/app/interfaces/customer';
import { CustomerService } from 'src/app/services/customer.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-customer-page',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.css'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.35s', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('0.35s', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class CustomerPageComponent implements OnInit {
  customerToUpdate: Customer = {
    id: '',
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    extra: '',
  };
  fullName!:string
  isAdded: boolean = false;
  isChecked: boolean = false;
  constructor(
    private cs: CustomerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cs
      .getOneCustomerById(window.history.state.id)
      .subscribe((customer:Customer) => {
        this.customerToUpdate = customer;
        this.customerToUpdate.extra
          ? ''
          : (this.customerToUpdate.extra = 'no extra data');
        this.fullName = `${this.customerToUpdate.firstname} ${this.customerToUpdate.lastname}`
      });
  }
  enableEdit(data: any) {
    if (typeof data.target.checked === 'boolean') {
      this.isChecked = data.target.checked;
    }
    let inputArr = document.querySelectorAll(
      'input[type="text"],textArea,input[type="email"]'
    );
    if (data.target.checked === true) {
      inputArr.forEach((input) => {
        input.removeAttribute('disabled');
      });
    } else {
      inputArr.forEach((input) => {
        input.setAttribute('disabled', 'true');
      });
    }
  }
  editData() {    
    this.cs.updateCustomer(this.customerToUpdate).then(() => {
      this.isAdded = true;
      setTimeout(() => {
        this.isAdded = false;
      }, 3000);
    });
    setTimeout(() => {
      this.router.navigateByUrl('/customerDashboard');
    }, 3500);
  }
}
