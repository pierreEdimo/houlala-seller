import {Component, Input} from '@angular/core';
import {OrderModel} from "../../utils/order.model";
import {OrderService} from "../../service/order.service";

@Component({
  selector: 'app-dashboard-orders',
  templateUrl: './dashboard-orders.component.html',
  styleUrls: ['./dashboard-orders.component.scss']
})
export class DashboardOrdersComponent {
  @Input() orders: OrderModel[] = [];
  @Input() title: string = '';

  constructor(public orderService: OrderService) {
  }

  goToDetail(id: number){
    alert(id);
  }

  updateStatusOfOrder(event: any, id: number, orders: OrderModel[]){
    this.orderService.updateStatusOfOrder(id, orders);
    event.stopPropagation();
  }

}
