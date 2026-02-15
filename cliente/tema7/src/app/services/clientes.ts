import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  colores: string[] = ['Rojo', 'Verde', 'Azul', 'Amarillo', 'Negro', 'Blanco'];

  getColores(): string[] {
    return this.colores;
  }
}
