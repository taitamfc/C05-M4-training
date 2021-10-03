import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-data-driven-builder',
  templateUrl: './form-data-driven-builder.component.html',
})
export class FormDataDrivenBuilderComponent implements OnInit {
  profileForm: FormGroup;
  constructor(
    private _FormBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.profileForm = this._FormBuilder.group(
      {
        'username': [
          '',
          [
            Validators.required,
            Validators.minLength(5)
          ]
        ],

        'email': [''],
        'info': this._FormBuilder.group(
          {
            'phone': [''],
            'mobile': ['']
          }
        )
      }
    );
  }

  onSubmit() {
    console.log(this.profileForm.value);
  }

}
