import {Component, OnDestroy} from '@angular/core';
import {AuthService} from "@core/services/auth.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private auth: AuthService, private fb: FormBuilder, private router: Router) {
    this.loginForm = this.initForm();
  }

  get email(): FormControl {
    return this.loginForm.controls["email"] as FormControl;
  }

  get password(): FormControl {
    return this.loginForm.controls["password"] as FormControl;
  }

  login(): void {
    let {...data} = this.loginForm.value
    this.auth.login(data);
  }

  initForm(): FormGroup {
    return this.fb.group({
      email: ["", [Validators.email, Validators.required]],
      password: ["", [Validators.required]]
    });
  }

}
