import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [RouterLink],
  template: `
    <h2>Productos</h2>

    <ul>
      @for (p of productos; track p.id) {
        <li>
          <a [routerLink]="['/producto', p.id]">
            {{ p.nombre }}
          </a>
        </li>
      }
    </ul>
  `
})
export class Productos {
  productos = [
    { id: 1, nombre: 'Portátil' },
    { id: 2, nombre: 'Monitor' },
    { id: 3, nombre: 'Teclado' }
  ];
}
