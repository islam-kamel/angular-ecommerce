import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthorizationGuard} from "@core/guards/authorization-guard";
import {LoginComponent} from "@components/login/login.component";

const appRoutes: Routes = [
  {path: "", redirectTo: "/products", pathMatch: "full"},
  {
    path: "products",
    loadChildren: () => import('@modules/products/products.module').then(m => m.ProductsModule),
    canActivate: [AuthorizationGuard]
  },
  {
    path: "login",
    component: LoginComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
