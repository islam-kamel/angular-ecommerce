import { Component } from '@angular/core';
import {LoginUserService} from "../../core/services/login-user.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  constructor(private login: LoginUserService) {
    this.login.login();
  }

}
