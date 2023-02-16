import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthService} from "./services/auth.service";
import {AuthGuardService} from "./services/auth-guard.service";



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [AuthService]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {ngModule: CoreModule, providers: [AuthService, AuthGuardService]}
  }
}
