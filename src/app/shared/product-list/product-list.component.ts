import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from 'src/app/utils/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  @Input() products: ProductModel[] = [];
  @Input() title = '';
  @Input() isActionNeeded = false;
  @Input() isLoading = false;

  @Output() onAction: EventEmitter<void> = new EventEmitter<void>();
}
