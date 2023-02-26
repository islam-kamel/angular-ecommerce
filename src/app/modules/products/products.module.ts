import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductsRoutingModule} from './products-routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ProductComponent} from "@reusable/product/product.component";
import {ProductsComponent} from "@components/products/products.component";
import {AddProductComponent} from "@components/add-product/add-product.component";
import {ProductDetailsComponent} from '@components/product-details/product-details.component';
import {CoreModule} from "@core/core.module";
import {EditProductComponent} from "@modules/products/Components/edit-product/edit-product.component";


@NgModule({
  declarations: [
    ProductsComponent,
    AddProductComponent,
    ProductComponent,
    ProductDetailsComponent,
    EditProductComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
    CoreModule,
    FormsModule,
  ]
})
export class ProductsModule {
}
