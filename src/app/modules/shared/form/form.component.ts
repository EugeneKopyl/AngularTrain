import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  public contactForm = new FormGroup({
    type: new FormControl(''),
    name: new FormControl(''),
    tel: new FormControl(''),
    email: new FormControl(''),
    checked: new FormControl(false),
  });

  public onSubmit() {
    this.contactForm.reset();
  }
}
