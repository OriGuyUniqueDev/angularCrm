import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

}
