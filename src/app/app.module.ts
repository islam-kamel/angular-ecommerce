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
import {MatButtonModule} from '@angular/material/button';
import { NotFoundComponent } from './Components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CoreModule.forRoot(),
    MatButtonModule,
  ],
  providers: [AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
