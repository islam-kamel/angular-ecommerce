import {Component} from '@angular/core';
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
    this.signup = this.createFormItem();

    this.phones.valueChanges.subscribe((value: string[]) => {
      for (let i = 0; i < value.length; i++) {
        this.phones.at(i).patchValue(value[i].replaceAll(/\D/g, ""), {emitEvent: false})
      }
    });
  }

  get phones(): FormArray {
    return this.signup.controls["phones"] as FormArray;
  }

  get address(): FormGroup {
    return this.signup.controls["address"] as FormGroup;
  }

  get email(): FormControl {
    return this.signup.controls['email'] as FormControl
  }

  addPhone(): void {
    this.phones.push(new FormControl("", {validators: Validators.required, updateOn: "change"}));
  }

  deletePhone(index: number) {
    this.phones.removeAt(index)
  }

  onSubmit() {
    console.log(this.signup.value)
  }

  createFormItem(): FormGroup {
    let form: FormGroup;

    form = this.fb.group({
      fullName: ["", Validators.required],
      email: ["",
        {
          validators: [Validators.email, Validators.required],
          asyncValidators: [this.formValidators.checkEmail()],
          updateOn: "blur",
        }
      ],
      address: this.fb.group({
        city: ["", Validators.required],
        street: ["", Validators.required],
        state: ["", Validators.required],
        zip: ["", Validators.required],
      }),
      phones: this.fb.array(
        [
          new FormControl("", {validators: Validators.required, updateOn: "change"})
        ]
      ),
      password: ["", {validators: [Validators.required]}],
      confirm: ["", Validators.required],
    }, {validators:  this.formValidators.passwordMatch("password", "confirm")});

    return form;
  }

}
