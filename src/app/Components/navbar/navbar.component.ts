import {AfterContentInit, ChangeDetectorRef, Component, Type, ViewChild, ViewContainerRef} from '@angular/core';
import {NavigationStart, Router} from "@angular/router";
import {LoginComponent} from "@components/login/login.component";
import {AuthService} from "@core/services/auth.service";
import {SignupComponent} from "@components/signup/signup.component";
import {ValidatorIsAuth} from "@core/types";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterContentInit {
  @ViewChild('login', {read: ViewContainerRef, static: true}) login!: ViewContainerRef;
  @ViewChild('signUp', {read: ViewContainerRef, static: true}) signUp!: ViewContainerRef;

  constructor(private router: Router, private auth: AuthService, private cd: ChangeDetectorRef) {
  }

  get fullName(): string {
    return this.auth.session?.data['fullName'] as string;
  }

  logout(): void {
    this.auth.logout();
  }

  appendAuthAction(refName: keyof NavbarComponent, component: Type<unknown>, callback: ValidatorIsAuth): void {
    if (this[refName] instanceof ViewContainerRef && callback(this.fullName)) {
      let ref = this[refName] as ViewContainerRef

      ref.createComponent(component)

    }

  }


  ngAfterContentInit(): void {
    this.appendAuthAction("signUp", SignupComponent, (value: string) => !value);

    if (this.auth.session || !this.login) {
      return;
    }

    this.appendAuthAction("login", LoginComponent, (value: string) => !value);

    this.router.events.subscribe((value) => {
      if (value instanceof NavigationStart) {

        if (value.url.match('login')) {
          return this.login.clear();

        }

      }

    })

  }

}

