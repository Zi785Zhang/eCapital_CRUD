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
    return this.http.get<Employee[]>(`${environment.apiUrl}/${this.url}`);
  }

}
