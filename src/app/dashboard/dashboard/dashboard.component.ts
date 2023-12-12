import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LocationService } from 'src/app/service/location.service';
import { OrderService } from 'src/app/service/order.service';
import { ProductService } from 'src/app/service/product.service';
import { LocationModel } from 'src/app/utils/location.model';
import { OrderModel } from 'src/app/utils/order.model';
import { ProductModel } from 'src/app/utils/product.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @Input() id= '';

  location$: Observable<LocationModel> = new Observable<LocationModel>();
  recentOrders$: Observable<OrderModel[]> = this.orderService.recentOrders$.data$;
  products$: Observable<ProductModel[]> = this.productService.product$.data$;

    constructor(public locationService: LocationService,
      public productService: ProductService,
      public orderService: OrderService){ }

ngOnInit(): void {
  this.location$ = this.locationService.location$.data$;
  this.orderService.fetchOrders(this.id);
  this.productService.fetchProducts(this.id);
}

}
