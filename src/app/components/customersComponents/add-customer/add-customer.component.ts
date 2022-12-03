import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';import { Customer } from 'src/app/interfaces/customer';
import { CustomerService } from 'src/app/services/customer.service';
@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  @Input() id?:string
  customer:Customer = {firstname:'',lastname:'',phone:'',email:''}
  isAdded:boolean = false
  constructor(private modal:NgbModal,private cs:CustomerService,private activeModal:NgbActiveModal) { }

  ngOnInit(): void {
  }
  addData(){
    this.cs.addCustomer(this.customer).then(() => {
      this.isAdded = true
      setTimeout(() => {
        this.activeModal.close()
        this.isAdded = false
      }, 3000);
    })
    }
}
