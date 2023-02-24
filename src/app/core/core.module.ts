import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthService} from "@core/services/auth.service";
import {HttpClientModule} from "@angular/common/http";
import {ApiService} from "@core/services/api.service";
import {FormValidators} from "@core/services/form-validatetors.validator";
import {LoginComponent} from "@components/login/login.component";
import {ProductsComponent} from "@components/products/products.component";
import {SignupComponent} from "@components/signup/signup.component";
import {ReactiveFormsModule} from "@angular/forms";
import {InputComponent} from "@reusable/input/input.component";
import {ProductComponent} from "@reusable/product/product.component";
import {DiscountPipe} from "@core/pipes/discount.pipe";


const shared = [
  LoginComponent,
  ProductsComponent,
  SignupComponent,
  InputComponent,
  ProductComponent,
  DiscountPipe,
]

@NgModule({
  declarations: [shared],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
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
