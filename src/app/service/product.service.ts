import {Injectable} from "@angular/core";
import {SubjectCollection} from "../utils/subject.collections";
import {ProductModel} from "../utils/product.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environment/environment";
import {finalize} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public product$: SubjectCollection<ProductModel[]> = new SubjectCollection<ProductModel[]>([]);

  constructor(private httpClient: HttpClient) {
  }

  public fetchProducts(uniqueId: string) {
    this.product$.data([]);
    this.product$.loading(true);
    this.product$.error(false);
    this.getProductsFromDb(`${environment.productUrl}/locations/${uniqueId}/size/0`).pipe(
      finalize(() => this.product$.loading(false))
    ).subscribe({
      next: (products) => this.product$.data(products),
      error: (error) => console.log(error)
    })
  }

  private getProductsFromDb(url: string) {
    return this.httpClient.get<ProductModel[]>(url);
  }

}
