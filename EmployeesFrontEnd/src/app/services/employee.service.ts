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

  public getEmployees(): Observable<Employee[]>|any{
    try{
      return this.http.get<Employee[]>(`${environment.apiUrl}/${this.url}`);
    }
    catch(e){
      console.log(e)
    }
  }

  public addEmployee(employee: Employee): Observable<Employee[]>|any{
    try{
      return this.http.post<Employee[]>(`${environment.apiUrl}/${this.url}`, employee);
    }
    catch(e){
      console.log(e)
    }
  }

  public editEmployee(employee: Employee): Observable<Employee[]>|any{
    try{
      return this.http.put<Employee[]>(`${environment.apiUrl}/${this.url}`, employee);
    }
    catch(e){
      console.log(e)
    }
  }

  public deleteEmployee(employee: Employee): Observable<Employee[]>|any{
    try{
      return this.http.delete<Employee[]>(`${environment.apiUrl}/${this.url}/${employee.id}`);
    }
    catch(e){
      console.log(e)
    }
  }

}
