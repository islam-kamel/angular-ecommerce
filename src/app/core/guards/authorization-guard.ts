import {CanActivate} from "@angular/router";
import {Injectable} from "@angular/core";
import {AuthService} from "../services/auth.service";

@Injectable({
  providedIn: "root",
})
export class AuthorizationGuard implements CanActivate {

  constructor(private _auth: AuthService) {
  }
  canActivate(): boolean {
    console.log(this._auth.session)
    return false;
  }

}
