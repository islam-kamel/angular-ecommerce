import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from "@core/services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class CanAccessLoginGuard implements CanActivate {
  constructor(private router: Router) {
  }

  canActivate(): boolean {

    if (!AuthService.fastCheck) {
      return true
    } else {
      this.router.navigate(["/products"])
      return false
    }
  }

}
