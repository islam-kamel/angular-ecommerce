import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ModuleWithProviders} from "@angular/core";
import {AuthService} from "./services/auth.service";
import {HttpClientModule} from "@angular/common/http";
import {ApiService} from "./services/api.service";
import {FormValidators} from "./services/form-validatetors.validator";
import {LoginComponent} from "../Components/login/login.component";
import {ProductsComponent} from "../Components/products/products.component";
import {SignupComponent} from "../Components/signup/signup.component";
import {ReactiveFormsModule} from "@angular/forms";


const shared = [LoginComponent, ProductsComponent, SignupComponent]

@NgModule({
  declarations: [shared],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [shared]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [AuthService, ApiService, FormValidators],
    };
  }
}
