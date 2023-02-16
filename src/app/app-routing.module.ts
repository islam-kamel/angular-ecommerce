import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainLayoutComponent} from "./Components/main-layout/main-layout.component";
import {ProductsComponent} from "./Components/products/products.component";
import {NotfoundComponent} from "./Components/notfound/notfound.component";
import {AuthGuardService} from "./core/services/auth-guard.service";
import {UserComponent} from "./Components/user/user.component";
import {LoginComponent} from "./Components/login/login.component";

const routes: Routes = [
  {path: "", component:MainLayoutComponent, children:
      [
        {path: "", redirectTo: "/home", pathMatch: "full"},
        {path: "home", component: ProductsComponent, canActivate:[AuthGuardService]},
        {path: "user", component: UserComponent, children:
          [
            {path: "login", component:LoginComponent}
          ]
        }
      ]
  },
  {path: "**", component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
