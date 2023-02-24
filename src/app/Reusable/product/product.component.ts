import {Component, Input} from "@angular/core";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
})
export class ProductComponent {
  @Input() image:any ;
  @Input() title:any ;
  @Input() price:any;
  @Input() qty:any;
}
