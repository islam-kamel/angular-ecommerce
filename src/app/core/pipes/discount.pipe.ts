import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: "discount",
})
export class DiscountPipe implements PipeTransform {
  transform(value: any, discount: any): number {
    return +value - (+value * +discount)
  }

}
