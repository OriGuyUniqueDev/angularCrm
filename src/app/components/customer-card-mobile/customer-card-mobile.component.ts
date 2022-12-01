import { Component, Input, OnInit } from '@angular/core';
import { Customer } from 'src/app/interfaces/customer';
import { CustomerService } from 'src/app/services/customer.service';
import {trigger,state,style,animate,transition,} from '@angular/animations';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditCustomerComponent } from '../edit-customer/edit-customer.component';


@Component({
  selector: 'app-customer-card-mobile',
  templateUrl: './customer-card-mobile.component.html',
  styleUrls: ['./customer-card-mobile.component.css'],
  animations: [
    trigger('fade',[
      transition(':enter',[
        style({opacity:0}),
        animate('0.35s',style({opacity:1}))
      ]),
      transition(':leave',[
        style({opacity:1}),
        animate('0.35s',style({opacity:0}))
      ]),
    ])
  ]
})
export class CustomerCardMobileComponent implements OnInit {
showEditMenu:boolean = false
customerArr!:Customer[]
@Input() customer!:Customer
  constructor(private cs:CustomerService,private modal:NgbModal) { }

  ngOnInit(): void {
  }
deleteCustomer(customer:Customer){
  if(confirm(`Are You Sure You Want to Delete: ${customer.firstname} ${customer.lastname}`)){
    this.cs.deleteCustomer(customer).then(data => console.log(data)).catch((err) => console.log(err))
  }
}
editCustomer(customer:Customer){
  const modalRef = this.modal.open(EditCustomerComponent,{
    size:'lg',
    centered:true,
    windowClass:'dark-modal'
  })
  modalRef.componentInstance.id = customer.id
}
}
