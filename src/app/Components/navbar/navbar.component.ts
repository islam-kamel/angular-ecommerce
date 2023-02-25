import {
  AbstractType,
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component,
  OnInit,
  Type,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {NavigationStart, Router} from "@angular/router";
import {LoginComponent} from "@components/login/login.component";
import {AuthService} from "@core/services/auth.service";
import {MatButtonModule} from '@angular/material/button';
import {SignupComponent} from "@components/signup/signup.component";
import {ValidatorIsAuth} from "@core/types";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterContentInit {
  @ViewChild('login', {read: ViewContainerRef, static: true}) login!: ViewContainerRef;
  @ViewChild('signUp', {read: ViewContainerRef, static: true}) signUp!: ViewContainerRef;

  constructor(private router: Router, private auth: AuthService) {
  }

  logout(): void {
    this.auth.logout();
  }

  get fullName(): string {
    return this.auth.session?.data['fullName'] as string;
  }


  appendAuthAction( refName: keyof NavbarComponent, component: Type<unknown>, callback: ValidatorIsAuth): void {
    if (this[refName] instanceof ViewContainerRef && callback(this.fullName)) {
      let ref = this[refName] as ViewContainerRef
      ref.createComponent(component)
    }
  }



  ngOnInit(): void { console.log("Init"); }

  ngAfterContentInit(): void {
    this.appendAuthAction("signUp", SignupComponent, (value: string) => !value);

    if (this.auth.session || !this.login) {return;}
    this.appendAuthAction("login", LoginComponent, (value: string) => !value);
    this.router.events.subscribe((value) => {
      if (value instanceof NavigationStart) {
        if (value.url.match('login')) {
          console.log("clear")
          return this.login.clear();
        }
      }
    })
  }


}

