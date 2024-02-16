import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';



@Component({
  selector: 'app-register-employee',
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.css']
})
export class RegisterEmployeeComponent implements OnInit {
 registerForm!: FormGroup; // Define employeeForm as a FormGroup
  //title:'Employee-app' | undefined;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }


  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      employeeId: ['', [Validators.required, Validators.pattern('[0-9]{8}')]],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      contactNumber: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      jobTitle: ['', Validators.required],
      department: ['', Validators.required],
      salary: ['', [Validators.required, Validators.min(0)]],
      hireDate: ['', Validators.required]
    });
  }
  /*onSubmit() {
    this.submitted = true

    if(this.registerForm.invalid){
      return
    }

    alert("Success")
  }*/

  registerSubmitted(){
    console.log(this.registerForm.get('employeeId'));
    this.submitted=true;

  }
}

