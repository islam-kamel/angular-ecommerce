import {ModuleWithProviders, NgModule} from '@angular/core';
import {AuthService} from "@core/services/auth.service";
import {ApiService} from "@core/services/api.service";
import {FormValidators} from "@core/services/form-validatetors.validator";


@NgModule()
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [AuthService, ApiService, FormValidators],
    };
  }
}
