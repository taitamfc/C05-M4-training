import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-template-driven',
  templateUrl: './form-template-driven.component.html',
})
export class FormTemplateDrivenComponent implements OnInit {

  profile = {
    'username': '',
    'email': ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(value: any) {
    console.log(value);
  }

  onResetForm(profileForm: NgForm) {
    profileForm.reset();
  }

}
