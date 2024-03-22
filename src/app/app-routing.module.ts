import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterEmployeeComponent } from './register-employee/register-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { MsalGuard } from '@azure/msal-angular';
import { BrowserUtils } from '@azure/msal-browser';


const routes: Routes = [
 {
    path:'',
    redirectTo:'/register-employee',
    //pathMatch:'full'
  },
  {
    component:RegisterEmployeeComponent,
    path:'register-employee',
    
  },
  {
    component:RegisterEmployeeComponent,
    path:'register-employee/:id',
    canActivate:[MsalGuard],
  },
  {
    component:EmployeeDetailsComponent,
    path:'employee-details',
    canActivate:[MsalGuard],
  },
];
//const isIframe = window !== window.parent && !window.opener;

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // Don't perform initial navigation in iframes or popups
      initialNavigation:
        !BrowserUtils.isInIframe() && !BrowserUtils.isInPopup()
          ? "enabledNonBlocking"
          : "disabled", // Set to enabledBlocking to use Angular Universal
    }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }