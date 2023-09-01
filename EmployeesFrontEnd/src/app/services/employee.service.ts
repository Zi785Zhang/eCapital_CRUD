import { Injectable } from '@angular/core';
import { Employee } from '../models/employees';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url = "Employee";

  constructor(private http: HttpClient) { }

  public getEmployees(): Observable<Employee[]>{
    console.log("get employee")
    return this.http.get<Employee[]>(`${environment.apiUrl}/${this.url}`);
  }

  public addEmployee(employee: Employee): Observable<Employee[]>{
    console.log("post employee")
    return this.http.post<Employee[]>(`${environment.apiUrl}/${this.url}`, employee);
  }

  public editEmployee(employee: Employee): Observable<Employee[]>{
    return this.http.put<Employee[]>(`${environment.apiUrl}/${this.url}`, employee);
  }

  public deleteEmployee(employee: Employee): Observable<Employee[]>{
    console.log(`${environment.apiUrl}/${this.url}/${employee.id}`);
    return this.http.delete<Employee[]>(`${environment.apiUrl}/${this.url}/${employee.id}`);
  }

}
