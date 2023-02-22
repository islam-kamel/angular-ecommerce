import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ModuleWithProviders} from "@angular/core";
import {AuthService} from "./services/auth.service";
import {HttpClientModule} from "@angular/common/http";
import {ApiService} from "./services/api.service";
import {FormValidators} from "./services/form-validatetors.validator";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [AuthService, ApiService, FormValidators],
    };
  }
}
