
import { EmployeeaddComponent } from './employeeadd/employeeadd.component';
import { EmployeeComponent } from './employee/employee.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeeditComponent } from './employeeedit/employeeedit.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeComponent
  },
  {
    path: 'employee',
    component: EmployeeComponent
  },
  {
    path: 'employee/add',
    component: EmployeeaddComponent
  },
  {
    path: 'employee/edit/:id',
    component: EmployeeeditComponent
  }
  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
