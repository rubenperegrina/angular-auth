import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { RegisterComponent } from './pages/register/register.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ResgisterFormComponent } from './components/resgister-form/resgister-form.component';
import { RecoveryFormComponent } from './components/recovery-form/recovery-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ForgotPasswordFormComponent } from './components/forgot-password-form/forgot-password-form.component';


@NgModule({
  declarations: [
    LoginComponent,
    ForgotPasswordComponent,
    RegisterComponent,
    RecoveryComponent,
    ResgisterFormComponent,
    RecoveryFormComponent,
    LoginFormComponent,
    ForgotPasswordFormComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
