import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddProductComponent} from "@components/add-product/add-product.component";
import {ProductsComponent} from "@components/products/products.component";
import {ProductService} from "@core/services/product.service";

const routes: Routes = [

  {
    path: "",
    component: ProductsComponent,
  },

  {path: "add", component: AddProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ProductService]
})
export class ProductsRoutingModule {
}
