import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators,
  ValidationErrors, ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-validado',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-validado.html',
  styleUrl: './form-validado.css',
})
export class FormValidado {

  edadValidator(min: number, max: number) {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;

      if (value === null || value === '') {
        return null; // deja que Validators.required se encargue
      }

      if (value < min || value > max) {
        return { edadInvalida: true };
      }

      return null;
    };
  }

  form = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z]+$')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    edad: new FormControl('', [Validators.required, this.edadValidator(18, 65)]),
  });

  onSubmit() {
    if (this.form.valid) {
      console.log('Formulario enviado:', this.form.value);
    } else {
      console.log('Formulario inválido');
    }
  }
}
