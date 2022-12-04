import { Component, HostListener, OnInit } from '@angular/core';
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
  isDisabled:boolean = true
  fullName!:string
  isAdded: boolean = false;
  isChecked: boolean = false;
  innerWidth: any;
  constructor(
    private cs: CustomerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;

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
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
  }
  enableEdit(data: any) {

    if (data.target.checked === true) {
      this.isDisabled = false
    } else {
      this.isDisabled = true
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
  logChange(event:any,input:any){
    console.log(event);
    console.log(input);
    
    
  }
}
