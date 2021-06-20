import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NaviComponent } from './components/navi/navi.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { DepartmentComponent } from './components/department/department.component';
import { FilterPipeEmployeePipe } from './pipes/filter-pipe-employee.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NaviComponent,
    EmployeeComponent,
    DepartmentComponent,
    FilterPipeEmployeePipe,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
