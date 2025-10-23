import { Component } from '@angular/core';
import { Hijo } from '../hijo/hijo';

@Component({
  selector: 'app-control-ciclo',
  imports: [Hijo],
  templateUrl: './control-ciclo.html',
  styleUrl: './control-ciclo.css'
})
export class ControlCiclo {
  mostrarHijo = false;
  nombre = 'Julian';

  crearHijo(): void {
    this.mostrarHijo = true;
  }

  destruirHijo(): void {
    this.mostrarHijo = false;
  }

  cambiarNombre(): void {
    if (this.nombre === 'Mateo') {
      this.nombre = 'Julian';
    }else {
    this.nombre = 'Mateo';
    }
  }
}
