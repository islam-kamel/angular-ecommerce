import {Component} from '@angular/core';
import {ApiService} from "@core/services/api.service";
import {IProduct} from "@core/types";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  products!: IProduct[];

  form: FormGroup;

  constructor(private api: ApiService, private fb: FormBuilder) {
    this.api.get<IProduct[]>('products').subscribe(value => {
      this.products = value;
    })

    this.form = this.fb.group({
      input: ["", Validators.required]
    })
  }


}
