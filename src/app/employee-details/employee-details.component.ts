import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {

employeeArray: any[] = [];
constructor (private router: Router){

}
ngOnInit(): void {
  const employeeData = localStorage.getItem("employees");
    if (employeeData != null) {
      this.employeeArray = JSON.parse(employeeData);
    }
}
onEdit(id:number) {
  this.router.navigate(['register-employee',id]);
}
onDelete(id: number) {
  debugger;
  const index = this.employeeArray.findIndex(m => m.id == id);
  this.employeeArray.splice(index, 1);
  localStorage.setItem('employees', JSON.stringify(this.employeeArray));
}


}
