import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-data-driven',
  templateUrl: './form-data-driven.component.html',

})
export class FormDataDrivenComponent implements OnInit {

  profileForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      'username': new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      'email': new FormControl(''),
      'info': new FormGroup({
        'phone': new FormControl(),
        'mobile': new FormControl(),
      })

    });

    console.log(this.profileForm.controls.username.errors);
  }

  onSubmit() {
    console.log(this.profileForm.value);
  }

}
