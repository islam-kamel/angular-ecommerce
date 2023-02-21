import {Component, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  form: any = "";

  constructor() {

    console.log(this.form)
  }

  recvForm(value: FormGroup) {
    console.log(value)
  }
}
