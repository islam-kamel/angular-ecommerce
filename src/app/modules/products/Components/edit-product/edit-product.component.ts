import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FormValidators} from "@core/services/form-validatetors.validator";
import {ProductService} from "@core/services/product.service";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent {

  productForm: FormGroup;

  constructor(private fb: FormBuilder, private pServices: ProductService) {
    this.productForm = this.initForm();
    this.pServices.getAll().subscribe(e => console.log(e))

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
}
