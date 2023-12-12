import {Component, Input, OnInit} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {LocationModel} from "../../utils/location.model";
import {OrderModel} from "../../utils/order.model";
import {LocationService} from "../../service/location.service";
import {OrderService} from "../../service/order.service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit{

  @Input() id: string = '';

  location$: Observable<LocationModel> = new Observable<LocationModel>();
  orders$: Observable<OrderModel[]> = new Observable<OrderModel[]>();
  orderStatus$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private locationService: LocationService,
              public orderService: OrderService) {
  }

  ngOnInit(): void {
    this.location$ = this.locationService.location$.data$;
    this.orders$ = this.orderService.recentOrders$.data$;
  }

  changeFilterOrderStatus(status: string){
    this.orderStatus$.next(status);
  }

}
