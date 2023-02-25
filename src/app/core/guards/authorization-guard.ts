import {CanActivate, Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {AuthService} from "@core/services/auth.service";

@Injectable({
  providedIn: "root",
})
export class AuthorizationGuard implements CanActivate {
  constructor(private _auth: AuthService, private router: Router) {
  }

  canActivate(): boolean {
    if (!this._auth.session) {
      this.router.navigate(['login']).then();
    }
    return !!this._auth.session;
  }

}
