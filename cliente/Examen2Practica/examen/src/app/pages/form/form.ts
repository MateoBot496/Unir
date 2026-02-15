import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Users } from '../../services/users';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {
  form = new FormGroup({
    name: new FormControl('',
      [Validators.required, Validators.minLength(3)]
    ),
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });

  constructor(private usersService: Users) {}

  onSubmit() {
    if (this.form.valid) {
      this.usersService.postUser(this.form.value).subscribe((response) => {
        console.log('User created:', response);
      });

      alert('Formulario enviado');
    }
  }
}
