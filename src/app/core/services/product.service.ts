import {Injectable} from '@angular/core';
import {ApiService} from "@core/services/api.service";
import {IProduct} from "@core/types";
import {Observable} from "rxjs";

@Injectable()
export class ProductService {

  constructor(private api: ApiService) {
  }

  post(data: IProduct): Observable<IProduct> {
    return this.api.post<IProduct>("products", JSON.stringify(data));
  }

  get(id: string | null): Observable<IProduct> {
    return this.api.get<IProduct>(`products/${id}`);
  }

}
