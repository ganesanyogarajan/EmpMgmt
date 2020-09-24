import { EmployeeService } from './../service/employee.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-employeeedit',
  templateUrl: './employeeedit.component.html',
  styleUrls: ['./employeeedit.component.css']
})
export class EmployeeeditComponent implements OnInit {
  public employeeFormGroup: FormGroup;
  employee: any = {};
  id: number = 0;
  public departments = ["Sale", "HR", "Accounts", "Developer", "Tester"];
  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private router: Router,
    private service: EmployeeService,
    private Toast:ToastrService,
  ) {
    this.actRoute.params.subscribe(data => {
     this.id=data.id 
    });
   }

  ngOnInit(): void {
    this.empForm();
    //this.id= +this.actRoute.snapshot.paramMap.get('id');
    
    this.getEmpDetails(this.id);
  }
  empForm() {
    this.employeeFormGroup = this.fb.group({
      EmpId:[""],
      Name: ["", Validators.required],
      Address: ["", Validators.required],
      Role:["", Validators.required],
      Department:["", Validators.required],
      SkillSets:["", Validators.required],
      Date_of_Birth:["", Validators.required],
      Date_of_Joining:["", Validators.required]
    });
  }
  getEmpDetails(Id)
  {

    this.service.getEmpDetails(Id).subscribe(response => {
      this.employee = response;
      this.employeeFormGroup.patchValue({
        Name: this.employee.Name,
        Address: this.employee.Address,
        Role: this.employee.Role,
        Department: this.employee.Department,
        SkillSets: this.employee.SkillSets,
        Date_of_Birth: this.formatDate(this.employee.Date_of_Birth) ,
        Date_of_Joining: this.formatDate(this.employee.Date_of_Joining)
      });      
    });
  }
  formatDate(dtval)
  {   
    const currentDate = new Date(dtval); 
    var currmonth = currentDate.getMonth();
    currmonth = currmonth + 1;
    currmonth = this.addPrefix(currmonth);
    return currentDate.getFullYear() + "-" + currmonth + "-" + this.addPrefix(currentDate.getDate());
    
  }
 
  addPrefix(val)
  {
    var retval: any = val;
    if (val < 10)
    {
      retval = "0" + val;
    }
    return retval;
  }
  
  Update()
  {

    this.service.updateEmpDetails(this.employeeFormGroup.value, this.id).subscribe
      (response => { 
        this.Toast.success("Updated Successfully");
        this.router.navigateByUrl('');

      })
  }


}
