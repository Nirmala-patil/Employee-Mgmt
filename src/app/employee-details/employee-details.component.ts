import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {
registerForm: any[]=[];

constructor (private router: Router){

}
ngOnInit(): void {
  const employeeData = localStorage.getItem("employees")
  if(employeeData != null) {
    this.registerForm = JSON.parse(employeeData);
  }
}
onEdit(employeeId:number) {
  const employeeData = this.getEmployeeDataById(employeeId);
  this.router.navigate(['/register-employee',employeeId]);
  
}
getEmployeeDataById(employeeId: number): any {
  const employees = JSON.parse(localStorage.getItem('employees') || '[]');
  return employees.find((employee: any) => employee.employeeId === employeeId);
}


}
