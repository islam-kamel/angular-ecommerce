import {AfterContentInit, Component, Input} from "@angular/core";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
})
export class ProductComponent implements AfterContentInit {
  @Input() image: any;
  @Input() title!: string;
  @Input() price!: number;
  @Input() qty!: number;
  @Input() discount!: number;
  @Input() category!: string;
  @Input() description!: string;
  @Input() handelCart!: Function;

  ngAfterContentInit() {
    !this.image ? this.image = "https://epay.slcc.edu/C20011_ustores/web/images/product-default-image.png" : null
  }

  calcDiscount(price: number, discount: any): number {
    return price - (price * discount);
  }
}
