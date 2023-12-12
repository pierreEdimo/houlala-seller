import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderService } from 'src/app/service/order.service';
import { OrderModel } from 'src/app/utils/order.model';

@Component({
  selector: 'app-recent-orders',
  templateUrl: './recent-orders.component.html',
  styleUrls: ['./recent-orders.component.scss']
})
export class RecentOrdersComponent {

  @Input() orders$: Observable<OrderModel[]>  = new Observable<OrderModel[]>;

  constructor(public orderService: OrderService) { }
}
