import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {ActivatedRoute, NavigationStart, Router} from "@angular/router";
import {LoginComponent} from "@components/login/login.component";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @ViewChild('container', {read: ViewContainerRef, static: true}) container!: ViewContainerRef;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.router.events.subscribe((value) => {
      if (value instanceof NavigationStart) {
        if (value.url.match('login')) {
          return this.container.clear()
        }
        this.container.createComponent(LoginComponent);
      }
    })
  }
}

