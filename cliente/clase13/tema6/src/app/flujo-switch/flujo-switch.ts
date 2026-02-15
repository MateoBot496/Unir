import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-flujo-switch',
  standalone: true,
  templateUrl: './flujo-switch.html',
  styleUrl: './flujo-switch.css',
})
export class FlujoSwitch {

  // Lista de roles disponibles
  roles = ['admin', 'editor', 'suscriptor', 'invitado'];

  // Signal que almacena el rol seleccionado
  rol = signal<string>('admin');

  cambiarRol(target: EventTarget | null) {
    if (target instanceof HTMLSelectElement) {
      this.rol.set(target.value);
    }
  }
}
