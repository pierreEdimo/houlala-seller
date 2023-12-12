import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders/orders.component';
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";
import {OrderFilterPipe} from "../pipes/order-filter.pipe";



@NgModule({
  declarations: [
    OrdersComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: ':id',
        outlet: '',
        component: OrdersComponent
      }
    ])
  ]
})
export class OrdersModule { }
