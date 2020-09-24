import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http: HttpClient) { }
  getAllEmpDetails() {    
    return this.http.get("getall");
  }
  addEmployee(emp) {    
    return this.http.post("addnew", emp);
  }
  getEmpDetails(id)
  {
    return this.http.get("getempdetails/"+ id);
  }
  updateEmpDetails(emp, id)
  {
    return this.http.post("updateemp/" + id, emp);
  }
  deleteEmp(id)
  {
    return this.http.get("deleteemp/" + id);
  }
}
