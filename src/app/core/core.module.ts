import {ModuleWithProviders, NgModule} from '@angular/core';
import {AuthService} from "@core/services/auth.service";
import {ApiService} from "@core/services/api.service";
import {FormValidators} from "@core/services/form-validatetors.validator";
import {RouterLinkActive} from "@angular/router";
import {InputComponent} from "@reusable/input/input.component";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [InputComponent],
  exports: [InputComponent]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [AuthService, ApiService, FormValidators, RouterLinkActive],
    };
  }
}
