import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../interfaces/employee';

@Pipe({
  name: 'employee'
})
export class EmployeePipe implements PipeTransform {
  transform(employees:Employee[],propName:keyof Employee,value:string): Employee[] {
    let filteredEmployees:Employee[] = []
    if(employees){      
      for(let employee of employees){
          if((employee[propName] as string).toLowerCase().includes(value.toLowerCase())){
            filteredEmployees.push(employee)
          }
        }
      }
    return filteredEmployees;
  }

}
