import { Component, HostListener, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Customer } from 'src/app/interfaces/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
@Input() id?:string
customer:Customer = {firstname:'',lastname:'',phone:'',email:''}
isAdded:boolean = false
  constructor(private modal:NgbModal,private cs:CustomerService,private activeModal:NgbActiveModal) { }
  innerWidth: any;
  ngOnInit(): void {
    this.innerWidth = window.innerWidth;

    if (this.id) {
      this.cs.getOneCustomerById(this.id).subscribe((res:Customer) => {
        this.customer = res
      })
    }
  }
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
  }
editData(){
this.cs.updateCustomer(this.customer).then(() => {
  this.isAdded = true
  setTimeout(() => {
    this.activeModal.close()
    this.isAdded = false
  }, 3000);
})
}

}
