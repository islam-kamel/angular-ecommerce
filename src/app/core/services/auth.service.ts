import {Injectable} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "./api.service";
import {Session, User} from "../types";
import {map, Observable} from "rxjs";

@Injectable()
export class AuthService {
  loginFrom: FormGroup;
  _sessionKey: string;
  constructor(private fb: FormBuilder, private client: ApiService) {
    this._sessionKey = "session";

    this.loginFrom = this.fb.group({
      email: ["", [Validators.email, Validators.required]],

      password: ["", [Validators.required]]

    }, {updateOn: "blur"});

  }

  get email(): FormControl {
    return this.loginFrom.controls["email"] as FormControl;
  }

  get password(): FormControl {
    return this.loginForm.controls["password"] as FormControl;
  }

  get loginForm(): FormGroup {
    return this.loginFrom;
  }

  /*
  * @return session Key as String;
  * */
  private createSession(sessionData: {[key: string]: any}): Session {
    delete sessionData["password"];
    let token = "";

    for (let i=0; i < sessionData["username"].length; i++) {
      token += sessionData["username"].charCodeAt(i);
    }

    let session: Session = {
      data: sessionData,
      token: token
    }

    localStorage.setItem("session", JSON.stringify(session));

    return session;
  }

  get session(): Session | undefined {
    let row = localStorage.getItem(this._sessionKey);
    let session = undefined;
    if (row) {
      session = JSON.parse(row) as Session
    }
    return session
  }

  login() {
    let data: User | null ;
    this.client.get<User>("users/1").subscribe({
      next: (value) => data = value,
      complete: () => {
        data? this.createSession(data) : null;
      }
    });
  }

}
