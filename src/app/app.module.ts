import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/loginResister/login/login.component';
import { CustomerDashboardComponent } from './components/customersComponents/customer-dashboard/customer-dashboard.component';
import { EmployeeDashboardComponent } from './components/employeeComponents/employee-dashboard/employee-dashboard.component';
import { PnfComponent } from './components/pnf/pnf.component';
import { FormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { LoginFormComponent } from './components/loginResister/login-form/login-form.component';
import { NavbarComponent } from './components/navigation/navbar/navbar.component';
import { CustomerCardMobileComponent } from './components/customersComponents/customer-card-mobile/customer-card-mobile.component';
import { OffCanvasComponent } from './components/navigation/off-canvas/off-canvas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './components/loginResister/register/register.component';
import { AddCustomerComponent } from './components/customersComponents/add-customer/add-customer.component';
import { EditCustomerComponent } from './components/customersComponents/edit-customer/edit-customer.component';
import { AllFilterPipe } from './pipes/all-filter.pipe';
import { CustomerPageComponent } from './components/customersComponents/customer-page/customer-page.component';
import { EmployeeCardMobileComponent } from './components/employeeComponents/employee-card-mobile/employee-card-mobile.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CustomerDashboardComponent,
    EmployeeDashboardComponent,
    PnfComponent,
    LoginFormComponent,
    NavbarComponent,
    CustomerCardMobileComponent,
    OffCanvasComponent,
    RegisterComponent,
    AddCustomerComponent,
    EditCustomerComponent,
    AllFilterPipe,
    CustomerPageComponent,
    EmployeeCardMobileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
