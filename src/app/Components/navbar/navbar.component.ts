import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {NavigationStart, Router} from "@angular/router";
import {LoginComponent} from "@components/login/login.component";
import {AuthService} from "@core/services/auth.service";
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @ViewChild('container', {read: ViewContainerRef, static: true}) container!: ViewContainerRef;

  constructor(private router: Router, private auth: AuthService) {
  }

  get fullName(): string {
    return this.auth.session?.data['fullName'] as string
  }

  logout(): void {
    this.auth.logout();
  }

  ngOnInit(): void {
    if (this.auth.session || !this.container) { return; }

    this.router.events.subscribe((value) => {
      if (value instanceof NavigationStart) {
        if (value.url.match('login')) {
          return this.container.clear();
        }
        this.container.createComponent(LoginComponent);
      }
    })
  }

}

