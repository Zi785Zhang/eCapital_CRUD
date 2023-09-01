import { Component, EventEmitter, Injectable, Input, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Employee } from 'src/app/models/employees';
import { EmployeeService } from 'src/app/services/employee.service';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-employee-crud',
  templateUrl: './employee-crud.component.html',
  styleUrls: ['./employee-crud.component.css']
})
export class EmployeeCrudComponent {
  @Input() employee?: Employee;
  @Output() updatedEmployees = new EventEmitter<Employee[]>();

  closeResult = '';
  constructor(private employeeService: EmployeeService, private modalService:NgbModal){}

  ngOnInit(): void{}

  open(content:any) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title'}).result
	}

  // Method to validate that salary input is numeric.

  validateSalary(employee: Employee){
    if (typeof employee.salary === 'number'){
      return true;
    }
    return false;
  }

  // CU methods

  addEmployee(employee: Employee){
    this.employeeService
      .addEmployee(employee)
      .subscribe((employees: Employee[]) => this.updatedEmployees.emit(employees))
  }

  editEmployee(employee: Employee){
    this.employeeService
      .editEmployee(employee)
      .subscribe((employees: Employee[]) => this.updatedEmployees.emit(employees))
  }
}
