import { EmployeeService } from './../service/employee.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr'


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  emp: any;
  
  constructor(
    private Empservice: EmployeeService,
    public Toast: ToastrService
  ) { }

ngOnInit(): void {
  this.Empservice.getAllEmpDetails().subscribe(
    response => { this.emp = response; },
    error => {
      this.emp = '';
      console.log("Error ")
    }
  );
}
  deleteConfirmation(name,id)
  {
    if (confirm("Are you sure do you want delete Employee name: "+name)) {
      this.Empservice.deleteEmp(id).subscribe(response => {
        this.Toast.success("Deleted successfully");
        const Employee = this.emp.find(employee => employee.EmpId === id);
        const index = this.emp.indexOf(Employee, 0);
        this.emp.splice(index, 1);
      });
    }
  }

}
