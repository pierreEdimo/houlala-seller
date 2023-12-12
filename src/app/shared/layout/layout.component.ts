import {Component, Input, OnInit} from '@angular/core';
import { LocationService } from 'src/app/service/location.service';
import {Observable} from "rxjs";
import {LocationModel} from "../../utils/location.model";
import {ProductService} from "../../service/product.service";
import {OrderService} from "../../service/order.service";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit{
  @Input() location$: Observable<LocationModel> = new Observable<LocationModel>();
  constructor(public locationService: LocationService,
              private productService: ProductService,
              private orderService: OrderService){}

  ngOnInit() {
    this.location$.subscribe(
      {
        next: (location) => {
          this.productService.fetchProducts(location.uniqueIdentifier);
          this.orderService.fetchOrders(location.uniqueIdentifier);
        }
      }
    )
  }
}
