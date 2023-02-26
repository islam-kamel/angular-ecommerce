import {Component} from '@angular/core';
import {IProduct} from "@core/types";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "@core/services/product.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  products!: IProduct[];

  form: FormGroup;

  constructor(private pServices: ProductService, private fb: FormBuilder) {
    this.pServices.getAll().subscribe(value => {
      this.products = value;
    })

    this.form = this.fb.group({
      input: ["", Validators.required]
    })
  }

  cart(event: any) {
    console.log(event)
  }

}
