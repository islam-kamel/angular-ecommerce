import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "@core/services/api.service";
import {Category} from "@core/types";
import {KeyValue} from "@angular/common";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  productForm: FormGroup;
  categories: {name: string, id: number}[];

  constructor(private fb: FormBuilder, private api: ApiService) {
    this.categories = [];

    this.productForm = this.initForm();
  }

  ngOnInit() {
    this.api.get<{name: string, id:number}[]>("categories").subscribe(value => {

      this.categories = value;

    });
  }

  get name(): FormControl {return this.productForm.controls["name"] as FormControl;}
  get category(): FormControl {return this.productForm.controls["category"] as FormControl;}
  get description(): FormControl {return this.productForm.controls["description"] as FormControl;}
  get image(): FormControl {return this.productForm.controls["image"] as FormControl;}
  get price(): FormControl {return this.productForm.controls["price"] as FormControl;}
  get qty(): FormControl {return this.productForm.controls["qty"] as FormControl;}

  initForm(): FormGroup {
    return this.fb.group({

      name: ["", Validators.required],
      category: ["", Validators.required],
      description: ["", Validators.required],
      image: ["", Validators.pattern(/(https|http)/g)],
      price: [0, [Validators.required, Validators.min(1)]],
      qty: [0, [Validators.required, Validators.min(1)]]

    });
  }
}
