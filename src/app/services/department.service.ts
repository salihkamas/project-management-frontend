import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from '../models/department';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  apiUrl = 'https://localhost:44331/api/';
  constructor(private httpClient: HttpClient) {}

  getAllDepartments():Observable<ListResponseModel<Department>>{
    let newPath = this.apiUrl+"departments/getall";
    return this.httpClient.get<ListResponseModel<Department>>(newPath);
  }
}
