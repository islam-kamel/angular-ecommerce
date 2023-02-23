import {Component} from '@angular/core';
import {ApiService} from "../../core/services/api.service";
import {IProduct} from "../../core/types";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  products!: IProduct[];
  constructor(private api: ApiService) {
    this.api.get<IProduct[]>('products').subscribe(value => {
      this.products = value;
    })
  }


}
