import {Injectable} from '@angular/core';
import {ApiService} from "./api.service";
import {Session, User} from "../types";

@Injectable()
export class AuthService {
  _sessionKey: string;

  constructor(private client: ApiService) {
    this._sessionKey = "session";
  }

  get session(): Session | undefined {
    let row = localStorage.getItem(this._sessionKey);
    let session = undefined;
    if (row) {
      session = JSON.parse(row) as Session
    }
    return session
  }

  generateHash(value: string): string {
    let token = "";

    for (let i = 0; i < value.length; i++) {
      token += value.charCodeAt(i);
    }

    return token;
  }

  login(loginData: { email: string, password: string }) {
    let data: User | null;
    this.client.get<User[]>(`users/?email=${loginData.email}&password=${loginData.password}`).subscribe({
      next: (value) => data = value[0],
      complete: () => {
        data ? this.createSession(data) : null;
      }
    });
  }

  /*
  * @return session Key as String;
  * */
  private createSession(sessionData: { [key: string]: any }): Session {
    delete sessionData["password"];
    let token = this.generateHash(sessionData["email"]);
    let session: Session = {
      data: sessionData,
      token: token
    }

    localStorage.setItem("session", JSON.stringify(session));

    return session;
  }

}
