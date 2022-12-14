import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from '../interfaces/customer';

@Pipe({
  name: 'allFilter'
})
export class AllFilterPipe implements PipeTransform {

  transform(customers:Customer[], propName:keyof Customer,value:string): Customer[] {
    let filteredCustomers:Customer[] = []
    
    if(customers){      
    for(let customer of customers){
        if((customer[propName] as string).toLowerCase().includes(value.toLowerCase())){
          filteredCustomers.push(customer)
        }
      }
    }
    return filteredCustomers
  }

}

