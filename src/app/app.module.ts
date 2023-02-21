import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './Components/navbar/navbar.component';
import {CoreModule} from "./core/core.module";
import {LoginComponent} from './Components/login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import {ProductsComponent} from './Components/products/products.component';
import { SignupComponent } from './Components/signup/signup.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, LoginComponent, ProductsComponent, SignupComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CoreModule.forRoot(),
  ],
  providers: [AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
