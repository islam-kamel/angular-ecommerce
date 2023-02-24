import {Component, Input} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() controlName:string = "";
  @Input() form!:FormGroup;
  @Input() className!:any;
  @Input() label:string = "";

  get control(): FormControl { return this.form.controls[this.controlName] as FormControl; }
}
