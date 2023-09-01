import { Component } from '@angular/core';
import { Employee } from './models/employees';
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EmployeesFrontEnd';
  employeeList: Employee[] = [];
  target = new Employee();

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((result: Employee[]) => (this.employeeList = result));
  }

  //Reset method post operation
  updateEmployeeList(employeeList: Employee[]){
    this.employeeList = employeeList;
    this.target = new Employee();
  }

  //Delete operation method
  public deleteEmployee(employee: Employee){
    this.employeeService
      .deleteEmployee(employee)
      .subscribe((result: Employee[]) => (this.employeeList = result));
  }
}
