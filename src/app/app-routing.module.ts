import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthorizationGuard} from "@core/guards/authorization-guard";

const appRoutes: Routes = [
  {
    path: "products",
    loadChildren: () => import('@modules/products/products.module').then(m => m.ProductsModule),
    canActivate: [AuthorizationGuard]
  },
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
