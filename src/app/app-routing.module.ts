import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthorizationGuard} from "@core/guards/authorization-guard";
import {LoginComponent} from "@components/login/login.component";
import {AuthService} from "@core/services/auth.service";

const appRoutes: Routes = [
  {path: "", redirectTo: "/products", pathMatch: "full"},
  {
    path: "products",
    loadChildren: () => import('@modules/products/products.module').then(m => m.ProductsModule),
    canActivate: [AuthorizationGuard]
  },
  {
    path: "login",
    component: LoginComponent,
    canActivate: [(): boolean => !AuthService.fastCheck]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
