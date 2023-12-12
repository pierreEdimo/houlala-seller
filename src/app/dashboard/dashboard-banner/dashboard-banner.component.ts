import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-banner',
  templateUrl: './dashboard-banner.component.html',
  styleUrls: ['./dashboard-banner.component.scss']
})
export class DashboardBannerComponent {
  @Input() productTotalCount = 0; 
  @Input() orderTotalCount = 0; 
  @Input() orderCanceledCount = 0; 
  @Input() orderSoldCount = 0; 
}
