import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "@core/services/api.service";
import {ProductService} from "@core/services/product.service";
import {FormValidators} from "@core/services/form-validatetors.validator";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  productForm: FormGroup;
  categories: { name: string, id: number }[];
  defaultImage: string = "https://shopnguyenlieumypham.com/wp-content/uploads/no-image/product-456x456.jpg";

  constructor(private fb: FormBuilder, private api: ApiService, private pService: ProductService) {
    this.categories = [];
    this.productForm = this.initForm();
  }

  get name(): FormControl {
    return this.productForm.controls["name"] as FormControl;
  }

  get image(): FormControl {
    return this.productForm.controls["image"] as FormControl;
  }

  get price(): FormControl {
    return this.productForm.controls["price"] as FormControl;
  }

  get qty(): FormControl {
    return this.productForm.controls["qty"] as FormControl;
  }

  get discount(): FormControl {
    return this.productForm.controls["discount"] as FormControl;
  }

  ngOnInit() {
    this.api.get<{ name: string, id: number }[]>("categories").subscribe(value => {

      this.categories = value;

    });
  }

  initForm(): FormGroup {
    return this.fb.group({

      name: ["", Validators.required],
      category: ["", Validators.required],
      description: ["", Validators.required],
      image: [null, Validators.pattern(/(https|http)/g)],
      price: ["", [Validators.required, Validators.min(1), FormValidators.removeNaN]],
      qty: ["", [Validators.required, Validators.min(1), FormValidators.removeNaN]],
      discount: ["", [Validators.max(100), FormValidators.removeNaN]]

    });
  }

  onSubmit(): void {
    let data = structuredClone(this.productForm.getRawValue());

    for (let key in data) {
      if (!isNaN(data[key])) data[key] = +data[key];
    }

    if (data["discount"]) data["discount"] /= 100;

    this.pService.post(data).subscribe(value => console.log(value, "Handel Me Add Product"));
  }

}
