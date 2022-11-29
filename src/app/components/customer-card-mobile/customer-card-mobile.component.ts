import { Component, Input, OnInit } from '@angular/core';
import { Customer } from 'src/app/interfaces/customer';
import { CustomerService } from 'src/app/services/customer.service';
import {trigger,state,style,animate,transition,} from '@angular/animations';

@Component({
  selector: 'app-customer-card-mobile',
  templateUrl: './customer-card-mobile.component.html',
  styleUrls: ['./customer-card-mobile.component.css'],
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
export class CustomerCardMobileComponent implements OnInit {
showEditMenu:boolean = false
customerArr!:Customer[]
@Input() customer!:Customer
  constructor() { }

  ngOnInit(): void {
  }

}
