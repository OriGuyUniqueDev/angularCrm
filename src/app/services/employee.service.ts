import { Injectable } from '@angular/core';
import { collection, Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  customerRef = collection(this.firestore,'employees')
  constructor(private firestore:Firestore) { }
}
