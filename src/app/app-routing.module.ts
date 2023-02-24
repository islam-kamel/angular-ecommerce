import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthorizationGuard} from "@core/guards/authorization-guard";
import {ProductsComponent} from "@components/products/products.component";
import {AddProductComponent} from "@components/add-product/add-product.component";

const appRoutes: Routes = [
  {path: "products", component: ProductsComponent, canActivate: [AuthorizationGuard]},
  {path: "add-product", component: AddProductComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
