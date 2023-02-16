import { Component } from '@angular/core';
import {AuthService} from "src/app/core/services/auth.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  constructor(private login: AuthService) {
  }

}
