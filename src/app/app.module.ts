import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from '@components/navbar/navbar.component';
import {CoreModule} from "@core/core.module";
import {LoginComponent} from "@components/login/login.component";
import {SignupComponent} from "@components/signup/signup.component";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CoreModule.forRoot(),
  ],
  providers: [AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
