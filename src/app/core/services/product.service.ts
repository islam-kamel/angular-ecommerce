import { Injectable } from '@angular/core';
import {ApiService} from "@core/services/api.service";
import {IProduct} from "@core/types";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private api: ApiService) { }

  post(data: IProduct) {
    return this.api.post<IProduct>("products", JSON.stringify(data));
  }

}
