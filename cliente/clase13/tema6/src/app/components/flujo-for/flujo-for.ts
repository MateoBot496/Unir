import { Component, signal } from '@angular/core';


interface Estudiante {
  id: number;
  nombre: string;
  edad: number;
}

@Component({
  selector: 'app-flujo-for',
  imports: [],
  templateUrl: './flujo-for.html',
  styleUrl: './flujo-for.css',
})

export class FlujoFor {
  estudiantes = signal<Estudiante[]>([
    { id: 1, nombre: 'Ana', edad: 20 },
    { id: 2, nombre: 'Luis', edad: 22 },
    { id: 3, nombre: 'Marta', edad: 19 },
  ]);

  limpiarLista() {
    this.estudiantes.set([]);
  }

  restaurarLista() {
    this.estudiantes.set([
      { id: 1, nombre: 'Ana', edad: 20 },
      { id: 2, nombre: 'Luis', edad: 22 },
      { id: 3, nombre: 'Marta', edad: 19 },
    ]);
  }
}
