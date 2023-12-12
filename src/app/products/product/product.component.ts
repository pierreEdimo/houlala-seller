import {Component, Input, OnInit} from '@angular/core';
import {LocationService} from "../../service/location.service";
import {Observable} from "rxjs";
import {LocationModel} from "../../utils/location.model";
import {ProductService} from "../../service/product.service";
import {ProductModel} from "../../utils/product.model";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{

  @Input() id = '';

  location$: Observable<LocationModel> = new Observable<LocationModel>();
  products$: Observable<ProductModel[]> = new Observable<ProductModel[]>();

  constructor(private locationService: LocationService,
              public productService: ProductService) {
  }

  ngOnInit(): void {
    this.location$ = this.locationService.location$.data$;
    this.products$ = this.productService.product$.data$;
  }
}
