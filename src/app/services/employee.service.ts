import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  apiUrl = 'https://localhost:44331/api/';
  constructor(private httpClient: HttpClient) {}
  getAllEmployee(): Observable<ListResponseModel<Employee>> {
    let newPath = this.apiUrl + 'employees/getall';
    return this.httpClient.get<ListResponseModel<Employee>>(newPath);
  }
}
