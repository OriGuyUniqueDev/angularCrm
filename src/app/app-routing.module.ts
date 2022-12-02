import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';
import { CustomerPageComponent } from './components/customer-page/customer-page.component';
import { EmployeeDashboardComponent } from './components/employee-dashboard/employee-dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { PnfComponent } from './components/pnf/pnf.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'login'},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'customerDashboard',component:CustomerDashboardComponent,canActivate:[AuthGuard]},
  {path:'customerDashboard/:name',component:CustomerPageComponent,canActivate:[AuthGuard]},
  {path:'employeeDashboard',component:EmployeeDashboardComponent,canActivate:[AuthGuard]},
  {path:'**',component:PnfComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
