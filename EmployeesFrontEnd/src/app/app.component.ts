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

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((result: Employee[]) => (this.employeeList = result));
  }
}
