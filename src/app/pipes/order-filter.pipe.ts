import { Pipe, PipeTransform } from '@angular/core';
import {OrderModel} from "../utils/order.model";

@Pipe({
  name: 'orderFilter'
})
export class OrderFilterPipe implements PipeTransform {

  transform(orders: OrderModel[], status?: string ): OrderModel[] {
    if(status){
      orders = orders.filter(x => x.status === status);
    }
    return orders;
  }

}
