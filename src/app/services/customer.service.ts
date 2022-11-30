import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, docData, Firestore, setDoc } from '@angular/fire/firestore';
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
  deleteCustomer(customer:Customer):Promise<void>{
    const customerDocRef = doc(this.firestore,`customers/${customer.id}`)
    return deleteDoc(customerDocRef) 
  }
  getOneCustomerById(id:string):Observable<Customer>{
    const customerDocRef = doc(this.firestore,`customers/${id}`)  
    return docData(customerDocRef,{idField:'id'}) as Observable<Customer>
  }
  updateCustomer(customer:Customer){
    const customerDocRef = doc(this.firestore,`customers/${customer.id}`) 
    return setDoc(customerDocRef,customer) 
  }
  addCustomer(customer:Customer){
    return addDoc(this.customerRef,customer)
  }
}
