import { Component, HostListener, OnInit } from '@angular/core';
import { Customer } from 'src/app/interfaces/customer';
import { CustomerService } from 'src/app/services/customer.service';
import {trigger,state,style,animate,transition,} from '@angular/animations';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddCustomerComponent } from '../add-customer/add-customer.component';
import { filter } from 'rxjs';
import { EditCustomerComponent } from '../edit-customer/edit-customer.component';

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
  isAdded:boolean = false
  search:string = ''
  innerWidth: any;
  filterSearch:keyof Customer = 'firstname'
  placeholder:string = `Search by ${this.filterSearch}`
  constructor(private cs: CustomerService, private modal:NgbModal) {}

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.getAllData();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
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
  radioChange(event:any){
    this.filterSearch = event.target.defaultValue
    this.placeholder = `Search by ${this.filterSearch}`
  }
    editCustomer(customer:Customer){
      const modalRef = this.modal.open(EditCustomerComponent,{
        size:'lg',
        centered:true,
        windowClass:'dark-modal'
      })
      modalRef.componentInstance.id = customer.id
    }
    deleteCustomer(customer:Customer){
      if(confirm(`Are You Sure You Want to Delete: ${customer.firstname} ${customer.lastname}`)){
        this.cs.deleteCustomer(customer).then(data => console.log(data)).catch((err) => console.log(err))
      }
    }
}
