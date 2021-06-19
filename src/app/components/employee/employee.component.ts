import { EmployeeService } from './../../services/employee.service';
import { Employee } from './../../models/employee';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  employees: Employee[] = [];
  filterText = '';
  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.getAllEmployee();
  }

  getAllEmployee() {
    this.employeeService.getAllEmployee().subscribe((response) => {
      this.employees = response.data;
    });
  }
}
