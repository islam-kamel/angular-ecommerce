import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginUserService} from "./services/login-user.service";



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [LoginUserService]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {ngModule: CoreModule, providers: [LoginUserService]}
  }
}
