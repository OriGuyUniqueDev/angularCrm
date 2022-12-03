import { Injectable } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Employee } from '../interfaces/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employeeRef = collection(this.firestore,'employees')
  constructor(private firestore:Firestore) { }

  getAllEmployees():Observable<Employee[]>{
    return collectionData(this.employeeRef,{idField:'id'}) as Observable<Employee[]>
  }
}
