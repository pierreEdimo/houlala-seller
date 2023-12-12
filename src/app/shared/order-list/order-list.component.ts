import {Component, EventEmitter, Input, Output} from '@angular/core';
import {OrderModel} from "../../utils/order.model";

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent {
  @Input() title: string = '';
  @Input() isActionNeeded: boolean = false;
  @Input() isFilterNeeded: boolean = false;
  @Input() orderLists: OrderModel[] = [];

  @Output() updateOrderStatus: EventEmitter<void> = new EventEmitter<void>();
  @Output() changeFilterOrderStatus: EventEmitter<string> = new EventEmitter<string>();

  filterOrderStatus: string = '';

}
