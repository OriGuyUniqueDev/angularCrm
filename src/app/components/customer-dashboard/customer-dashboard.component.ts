import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/interfaces/customer';
import { CustomerService } from 'src/app/services/customer.service';
import {trigger,state,style,animate,transition,} from '@angular/animations';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddCustomerComponent } from '../add-customer/add-customer.component';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css'],
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
export class CustomerDashboardComponent implements OnInit {
  name: string = sessionStorage.getItem('email') as string;
  showEditMenu: boolean = false;
  showLoader: boolean = true;
  customerArr!: Customer[];
  constructor(private cs: CustomerService, private modal:NgbModal) {}

  ngOnInit(): void {
    this.getAllData();
  }
  getAllData() {
    this.cs.getAllCustomers().subscribe((data: Customer[]) => {
      this.customerArr = data;
      this.showLoader = false
    });
  }
  addCustomer(){
    const modalRef = this.modal.open(AddCustomerComponent,{
      size:'lg',
      centered:true,
      windowClass:'dark-modal'
    })
   
  }
}
