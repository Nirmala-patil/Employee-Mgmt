import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterEmployeeComponent } from './register-employee/register-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';


const routes: Routes = [
 {
    path:'',
    redirectTo:'/register-employee',
    pathMatch:'full'
  },
  {
    component:RegisterEmployeeComponent,
    path:'register-employee',
  },
  {
    component:RegisterEmployeeComponent,
    path:'register-employee/:id',
  },
  {
    component:EmployeeDetailsComponent,
    path:'employee-details',
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
