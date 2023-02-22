import {AsyncValidatorFn, FormGroup, ValidationErrors, ValidatorFn} from "@angular/forms";
import {delay, map, Observable, tap} from "rxjs";
import {User} from "../types";
import {Injectable} from "@angular/core";
import {ApiService} from "./api.service";

@Injectable()
export class FormValidators {

  constructor(private api: ApiService) {
  }

  passwordMatch(control1: string, control2: string) {
    return (form: FormGroup) => {
      let password = form.controls[control1];
      let confirm = form.controls[control2];
      if(password.value !== confirm.value && confirm.dirty) {
        return password.setErrors({MissMatch: true})
      }
      return password.setErrors(null)

    }
  }
  checkEmail(): AsyncValidatorFn {
    let api = this.api;
    return (control): Observable<ValidationErrors | null> => {
      return api.get<User[]>(`users/?email=${control.value}`).pipe(
        delay(1000),
        map((value) => {
          let status = null
            value.map(res => res.email === control.value ? status = {emailTaken: true} : status = null)
          return status;
        }
      ))
    }
  }
}
