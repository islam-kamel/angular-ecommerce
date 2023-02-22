import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {FormValidators} from "../../core/services/form-validatetors.validator";

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SignupComponent {
  signup: FormGroup;

  constructor(private fb: FormBuilder, private formValidators: FormValidators) {
    this.signup = this.createFormItem("init");
  }

  get phones(): FormArray {return this.signup.controls["phones"] as FormArray;}

  addPhone(): void {
    this.phones.push(new FormControl(""));
  }

  deletePhone(index: number) {
    this.phones.removeAt(index)
  }

  get address(): FormGroup {return this.signup.controls["address"] as FormGroup;}

  get email(): FormControl {return this.signup.controls['email'] as FormControl}

  createFormItem(itemType: string): FormGroup {
    let form: FormGroup = this.fb.group({});

    switch (itemType) {
      case "init":
        form = this.fb.group({
          fullName: "",
          email: ["", [Validators.email, Validators.required], [this.formValidators.checkEmail()]],
          address: this.fb.group({
            city: ["", Validators.required],
            street: ["", Validators.required],
            state: ["", Validators.required],
            zip: ["", Validators.required],
          }, {validators: Validators.required}),
          phones: this.fb.array([new FormControl("", Validators.required)]),
          password: ["", Validators.required],
          confirm: ["", Validators.required],
        }, {updateOn: "blur"} )
    }

    return form;
  }

}
