import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthorizationGuard} from "./core/guards/authorization-guard";
import {ProductsComponent} from "./Components/products/products.component";

const appRoutes: Routes = [
  {path: "login", component: ProductsComponent, canActivate: [AuthorizationGuard]}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
