import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddProductComponent} from "@components/add-product/add-product.component";
import {ProductsComponent} from "@components/products/products.component";
import {ProductService} from "@core/services/product.service";
import {ProductDetailsComponent} from "@components/product-details/product-details.component";

const routes: Routes = [

  {
    path: "",
    component: ProductsComponent,
  },
  {
    path: "add",
    component: AddProductComponent
  },
  {
    path: ":id",
    component: ProductDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ProductService]
})
export class ProductsRoutingModule {
}
