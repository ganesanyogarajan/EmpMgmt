import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeaddComponent } from './employeeadd/employeeadd.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EmployeeService } from './service/employee.service';
import { EmployeeeditComponent } from './employeeedit/employeeedit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HeaderInterceptor } from './header.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeaddComponent,
    NavbarComponent,
    EmployeeeditComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [EmployeeService,
    {provide:HTTP_INTERCEPTORS, useClass:HeaderInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
