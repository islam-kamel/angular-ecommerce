import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductsRoutingModule} from './products-routing.module';
import {ProductsComponent} from "@components/products/products.component";
import {ReactiveFormsModule} from "@angular/forms";
import {AddProductComponent} from "@components/add-product/add-product.component";
import {ProductComponent} from "@reusable/product/product.component";
import {InputComponent} from "@reusable/input/input.component";


@NgModule({
  declarations: [ProductsComponent, AddProductComponent, ProductComponent, InputComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
  ]
})
export class ProductsModule {
}
