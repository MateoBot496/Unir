import { Component } from '@angular/core';

import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { CommonModule, JsonPipe } from '@angular/common';
@Component({
  selector: 'app-form-reactivo',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './form-reactivo.html',
  styleUrl: './form-reactivo.css',
})
export class FormReactivo {
  form = new FormGroup({
    nombre: new FormControl(''),
    edad: new FormControl(''),
    email: new FormControl(''),
  });

  onSubmit() {
    console.log(this.form.value);
  }
}
