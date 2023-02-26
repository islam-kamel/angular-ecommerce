import {Injectable} from '@angular/core';
import {ApiService} from "@core/services/api.service";
import {ICategory, IProduct} from "@core/types";
import {map, Observable, tap} from "rxjs";

@Injectable()
export class ProductService {

  constructor(private api: ApiService) {
  }

  post(data: IProduct): Observable<IProduct> {
    return this.api.post<IProduct>("products", JSON.stringify(data));
  }

  getAll(): Observable<IProduct[]> {
    return this.api.get<IProduct[]>(`products`).pipe(
      map(value => {
        for (let product of value) {
          this.api.get<ICategory>(`categories/${product.category}`).subscribe(category => product.category = category)
        }
        return value;
      })
    );
  }

  getById(id: (number | string)): Observable<IProduct> {
    return this.api.get<IProduct>(`products/${id}`).pipe(
      map(value => {
          this.api.get<ICategory>(`categories/${value.category}`).subscribe(category => value.category = category)
          return value;
      })
    );
  }

  update(id: number | string, data: IProduct): Observable<IProduct> {
    return this.api.put<IProduct>(`products/${id}`, JSON.stringify(data));
  }

}
