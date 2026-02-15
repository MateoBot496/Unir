import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pagina404',
  standalone: true,
  imports: [RouterLink],
  template: `
    <h2>Error 404</h2>
    <p>Página no encontrada</p>
    <a routerLink="/inicio">Volver al inicio</a>
  `
})
export class Pagina404 {}
