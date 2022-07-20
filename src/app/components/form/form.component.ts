import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  contactForm = new FormGroup({
    type: new FormControl(''),
    name: new FormControl(''),
    tel: new FormControl(''),
    email: new FormControl(''),
    checked: new FormControl(false),
  });

  onSubmit() {
    console.log(this.contactForm.value);
  }
}
