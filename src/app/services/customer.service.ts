import { Injectable } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Customer } from '../interfaces/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customerRef = collection(this.firestore,'customers')
  constructor(private firestore:Firestore) { }

  getAllCustomers():Observable<Customer[]>{
    return collectionData(this.customerRef,{idField:'id'}) as Observable<Customer[]>
  }
}
