import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetAdminDataComponent } from './get-admin-data/get-admin-data.component';
import { AddDataControllerComponent } from './add-data-controller/add-data-controller.component';
import { ViewDataComponent } from './view-data/view-data.component';
import { UpdateDataComponent } from './update-data/update-data.component';

import { FormBuilderComponent } from './form-builder/form-builder.component';
import { LoginComponent } from './login/login.component';
import { StudentRegisterComponent } from './student-register/student-register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { OTPGenrationComponent } from './otp-genration/otp-genration.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { StudentListComponent } from './student-list/student-list.component';
import { DialogUpdateComponentComponent } from './dialog-update-component/dialog-update-component.component';
import { UserRegisterMicroserviceComponent } from './user-register-microservice/user-register-microservice.component';
import { authGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path:'getadmin',
    component:GetAdminDataComponent,
    canActivate:[authGuard]
  },
  {
    path:'studentregister',
    component:StudentRegisterComponent

  },
  {
    path:'studentlist',
    component:StudentListComponent,
    canActivate:[authGuard]
  },
  
  {
    path:'studentopendailog',
    component:DialogUpdateComponentComponent,
    canActivate:[authGuard]
  },
  {
    path:'userdetailregister',
    component:UserRegisterMicroserviceComponent
  },
  {
    path:'userdetailregister/:id',
    component:UserRegisterMicroserviceComponent
  },

  {
    path:'adminregister',
    component:RegisterAdminComponent
  },
  {
    path:'add',
    component:AddDataControllerComponent,
    canActivate:[authGuard]
  },
  {
    path:'viewdata/:id',
    component:ViewDataComponent
  },
  {
    path:'update',
    component:UpdateDataComponent,
    canActivate:[authGuard]
  },
  {
    path:'update/:id',
    component:UpdateDataComponent,
    canActivate:[authGuard]
  },
  {
    path:'builder',
    component:FormBuilderComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'forgot',
    component:ForgotPasswordComponent
  },
  {
    path:'otpgenrate',
    component:OTPGenrationComponent
  },
  {
    path:'updatepass',
    component:UpdatePasswordComponent
  },
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
