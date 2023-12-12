import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    LoginComponent, 
  ],
  imports: [
    SharedModule, 
    CommonModule, 
    FormsModule, 
    HttpClientModule, 
    ReactiveFormsModule, 
    RouterModule.forChild([
      {
        path:'', 
        outlet: '', 
        component: LoginComponent
      }
    ]), 
  ]
})
export class LoginModule { }
