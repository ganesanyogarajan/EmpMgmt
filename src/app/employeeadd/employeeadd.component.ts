import { EmployeeService } from './../service/employee.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr'; 
import { Router } from '@angular/router';

@Component({
  selector: 'employeeadd',
  templateUrl: './employeeadd.component.html',
  styleUrls: ['./employeeadd.component.css']
})
export class EmployeeaddComponent  implements OnInit {
  public employeeForm;
  public departments = ["Sale", "HR", "Accounts", "Developer", "Tester"];
  constructor(
    public fb: FormBuilder,
    private empservice: EmployeeService,
    public toastr: ToastrService  ,
    public router:Router
  ) {  }
  ngOnInit() {
    this.formBuilderemployee();
  }
  
  
  formBuilderemployee() {
    this.employeeForm = this.fb.group({
      Name: ["", Validators.required],
      Address: ["", Validators.required],
      Role: ["", Validators.required],
      Department: ["", Validators.required],
      SkillSets: ["", Validators.required],
      Date_of_Birth: ["", Validators.required],
      Date_of_Joining: ["", Validators.required]
    });
  }
  onSubmit() {
    //console.warn(this.employeeFormGroup.value);
    this.empservice.addEmployee(this.employeeForm.value).subscribe(response => {     
      var empname = this.employeeForm.value.Name;
      this.ResetForm();
      this.toastr.success(empname + ' successfully added');
      this.router.navigate(["/employee"]);
      });    
  }
  ResetForm() {
    this.employeeForm.reset();
  }  
  onChangeEvent(event: any)
  {
    console.log(event.target.value);
  }

}
