import { Component } from '@angular/core';
import {AuthService} from "../../core/services/auth.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  constructor(private auth: AuthService) {

  }

  get email(): FormControl {
    return this.auth.email;
  }

  get password(): FormControl {
    return this.auth.password;
  }

  get loginForm(): FormGroup {
    return this.auth.loginForm;
  }

  login() {
    this.auth.login();
  }

}
