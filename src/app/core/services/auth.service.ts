import {Injectable} from "@angular/core";
import {Router} from "@angular/router";

@Injectable()
export class AuthService {
  constructor(private router: Router) {
  }
  login(): void {
    document.cookie = `token=${crypto.randomUUID()}; path=/; secure; sameSite=lax;`
    this.router.navigateByUrl("home")
  }
  get isLogin(): Boolean {
    return !!document.cookie;
  }

  singUp() {
    console.log("Sign UP Works")
  }
}
