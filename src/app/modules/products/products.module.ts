import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductsRoutingModule} from './products-routing.module';
import {ReactiveFormsModule} from "@angular/forms";
import {ProductComponent} from "@reusable/product/product.component";
import {ProductsComponent} from "@components/products/products.component";
import {AddProductComponent} from "@components/add-product/add-product.component";
import {ProductDetailsComponent} from '@components/product-details/product-details.component';
import {CoreModule} from "@core/core.module";


@NgModule({
  declarations: [ProductsComponent, AddProductComponent, ProductComponent, ProductDetailsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
    CoreModule,
  ]
})
export class ProductsModule {
}
