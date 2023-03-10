import {AfterContentInit, Component, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FormValidators} from "@core/services/form-validatetors.validator";
import {ProductService} from "@core/services/product.service";
import {AddProductComponent} from "@components/add-product/add-product.component";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements AfterContentInit {

  productForm: FormGroup;
  productId: (string | number);
  @ViewChild("addProduct", {static: true}) addProductComponent!: AddProductComponent;

  constructor(private fb: FormBuilder, private pServices: ProductService, private activeRouter: ActivatedRoute, private router: Router) {
    this.productId = this.activeRouter.snapshot.paramMap.get("id")!
    this.productForm = this.initForm();
    this.pServices.getById(this.productId!).subscribe(e => {
      delete e["id"]
      e['discount'] = e['discount'] * 100
      this.productForm.setValue(e)
      this.productForm.patchValue({"category": e.category})
    })

  }

  ngAfterContentInit(): void {
    this.addProductComponent.onSubmit = this.update.bind(this)
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

  update() {
    let data = this.productForm.getRawValue();
    if (data["discount"]) data["discount"] /= 100;
    this.pServices.update(this.productId, data).subscribe(e => {
      this.router.navigateByUrl("/", {skipLocationChange: true}).then(() => {
        this.router.navigate([this.router.url, this.activeRouter.snapshot.paramMap.get("id")]).then(() => {
          try {
            document.body.removeAttribute("style")
            document.body.classList.remove("model-open")
            document.body.removeChild(document.querySelector(".modal-backdrop.fade.show") as Node)
          } catch (e){}

        })
      })
    })
  }
}
