import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome/welcome.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    WelcomeComponent
  ],
  imports: [
    CommonModule, 
    SharedModule, 
    RouterModule.forChild([
      {
        path:'', 
        outlet: '', 
        component: WelcomeComponent
      }
    ])
  ]
})
export class HomeModule { }
