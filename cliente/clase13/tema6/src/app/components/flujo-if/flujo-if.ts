import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-flujo-if',
  imports: [],
  templateUrl: './flujo-if.html',
  styleUrl: './flujo-if.css',
})
export class FlujoIf {
  edad = signal<number>(18);

  cumplirAnios() {
    this.edad.update((edad) => edad + 1);
  }
}
