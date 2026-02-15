import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  imports: [ReactiveFormsModule],
  templateUrl: './product-form.html',
  styleUrl: './product-form.css',
})
export class ProductForm {
  @Output() nuevoProducto = new EventEmitter<any>();

  formulario = new FormGroup({
    nombre: new FormControl(''),
    descripcion: new FormControl(''),
    precio: new FormControl(0),
    category: new FormControl(''),
    image: new FormControl(''),
    active: new FormControl(true),

  });

  enviar(){
    this.nuevoProducto.emit(this.formulario.value);
    this.formulario.reset();

  }
}
