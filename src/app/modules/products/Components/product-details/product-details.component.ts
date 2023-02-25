import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "@core/services/product.service";
import {IProduct} from "@core/types";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: IProduct;
  constructor(private activeLink: ActivatedRoute, private pService: ProductService) {
    this.product = {} as IProduct;
  }

  ngOnInit(): void {
    let id = this.activeLink.snapshot.paramMap.get("id");

    this.pService.get(id).subscribe(value => {
      this.product = value;
    });

  }


}
