import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { DashboardBannerComponent } from './dashboard-banner/dashboard-banner.component';
import { NgIconsModule } from '@ng-icons/core';
import {heroBars4, heroArrowLongRight} from '@ng-icons/heroicons/outline';
import { RecentOrdersComponent } from './recent-orders/recent-orders.component';
import { DashboardOrdersComponent } from './dashboard-orders/dashboard-orders.component';



@NgModule({
  declarations: [
    DashboardComponent,
    DashboardBannerComponent,
    RecentOrdersComponent,
    DashboardOrdersComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgIconsModule.withIcons({
      heroBars4,
      heroArrowLongRight
    }),
    RouterModule.forChild([
      {
        path: ':id',
        outlet: '',
        component: DashboardComponent
      }
    ])
  ]
})
export class DashboardModule { }
