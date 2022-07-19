import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  type = '';
  name = '';
  tel = '';
  email = '';
  checked = false;

  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}
