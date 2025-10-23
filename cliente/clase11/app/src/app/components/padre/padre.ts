import { Component } from '@angular/core';
import { Hijo } from '../hijo/hijo';

@Component({
  selector: 'app-padre',
  imports: [Hijo],
  templateUrl: './padre.html',
  styleUrl: './padre.css',
})
export class Padre {
  nombreDelHijo: string = 'Juan';
  mostrarHijo: boolean = false;
  mensajeDelHijo: string = '';

  crearHijo(): void {
    this.mostrarHijo = !this.mostrarHijo;
  }

  cambiarNombre(): void {
    if (this.nombreDelHijo === 'Juan') {
      this.nombreDelHijo = 'María';
    } else {
      this.nombreDelHijo = 'Juan';
    }
  }

  onSaludo(mensaje: string): void {
    alert(mensaje);
    this.mensajeDelHijo = mensaje;
  }
}
