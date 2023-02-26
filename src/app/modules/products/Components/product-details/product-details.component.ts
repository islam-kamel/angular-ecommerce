import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "@core/services/product.service";
import {IProduct} from "@core/types";
import {map} from "rxjs";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: IProduct;
  qty: number;
  constructor(private activeLink: ActivatedRoute, private pService: ProductService) {
    this.qty = 0;
    this.product = {} as IProduct;
  }

  ngOnInit(): void {
    let id = this.activeLink.snapshot.paramMap.get("id");

    this.pService.getById(id as string).subscribe(value => {
      this.product = value;
    });

  }

  calcDiscount(price: number, discount: any): number {
    return price - (price * discount);
  }

  increment() {
    let newValue = this.qty + 1;
    if(newValue <= this.product.qty) ++this.qty;
  }

  decrement() {
    let newValue = this.qty - 1;
    if (newValue >= 0) --this.qty;
  }
}
