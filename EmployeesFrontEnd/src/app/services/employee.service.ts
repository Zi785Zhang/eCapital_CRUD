import { Injectable } from '@angular/core';
import { Employee } from '../models/employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  public getEmployees(): Employee[]{
      let person = new Employee();
      person.id = 1;
      person.first_name = "Zijian";
      person.last_name = "Zhang";
      person.salary = 10000;

      return[person];
  }

}
