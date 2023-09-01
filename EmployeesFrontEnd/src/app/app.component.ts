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
  target: Employee = new Employee();

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((result: Employee[]) => (this.employeeList = result));
  }

  updateEmployeeList(employeeList: Employee[]){
    this.employeeList = employeeList;
  }

  updateTarget(employee: Employee){
    this.target = employee;
  }

  public deleteEmployee(employee: Employee){
    this.employeeService
      .deleteEmployee(employee)
      .subscribe(() => {
        this.ngOnInit()
      })
  }
}
