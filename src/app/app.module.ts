import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { GetAdminDataComponent } from './get-admin-data/get-admin-data.component';
import { AddDataControllerComponent } from './add-data-controller/add-data-controller.component';
import { FormsModule } from '@angular/forms';
import { ViewDataComponent } from './view-data/view-data.component';
import { UpdateDataComponent } from './update-data/update-data.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AuthInterceprerInterceptor } from './interceptor/auth-interceprer.interceptor';
import { StudentRegisterComponent } from './student-register/student-register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { OTPGenrationComponent } from './otp-genration/otp-genration.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { StudentListComponent } from './student-list/student-list.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSliderModule} from '@angular/material/slider';
import {MatSortModule} from '@angular/material/sort';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogUpdateComponentComponent } from './dialog-update-component/dialog-update-component.component';
import { UserRegisterMicroserviceComponent } from './user-register-microservice/user-register-microservice.component';



@NgModule({
  declarations: [
    AppComponent,
    GetAdminDataComponent,
    AddDataControllerComponent,
    ViewDataComponent,
    UpdateDataComponent,
    FormBuilderComponent,
    LoginComponent,
    NavBarComponent,
    StudentRegisterComponent,
    ForgotPasswordComponent,
    OTPGenrationComponent,
    UpdatePasswordComponent,
    RegisterAdminComponent,
    StudentListComponent,
    DialogUpdateComponentComponent,
    UserRegisterMicroserviceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatSliderModule,
    MatSortModule,
    MatCardModule,
    MatTableModule,
    MatDialogModule
    
    



  ],
  providers: [{provide:HTTP_INTERCEPTORS , useClass:AuthInterceprerInterceptor , multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
