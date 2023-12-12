import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SubjectCollection } from "../utils/subject.collections";
import { OrderModel } from "../utils/order.model";
import {finalize, first} from "rxjs";
import {environment} from "../../environment/environment";

@Injectable({
    providedIn: 'root'
})
export class OrderService{

    public recentOrders$: SubjectCollection<OrderModel[]> = new SubjectCollection<OrderModel[]>([]);

    constructor(private httpClient: HttpClient){}



    public fetchOrders(uniqueId: string){
        this.recentOrders$.data([]);
        this.recentOrders$.loading(true);
        this.recentOrders$.error(false);
        this.getOrdersFromDb(`${environment.orderUrl}/confirmed/locations/${uniqueId}`).pipe(
            finalize(() => this.recentOrders$.loading(false))
        ).subscribe({
            next: (orders) => this.recentOrders$.data(orders),
            error: (error) => console.log(error)
        });
    }

    private getOrdersFromDb(url: string){
        return this.httpClient.get<OrderModel[]>(url);
    }

    public updateStatusOfOrder(id: number, orders: OrderModel[]){
      this.httpClient.put(`${environment.orderUrl}/status/${id}`, null)
        .pipe(first())
        .subscribe();
    }
}
