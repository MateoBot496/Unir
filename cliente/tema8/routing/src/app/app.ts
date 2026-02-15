import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <nav>
      <a routerLink="/inicio"         routerLinkActive="activo"         [routerLinkActiveOptions]="{ exact: true }">
        Inicio
      </a>
      |
      <a routerLink="/productos"
         routerLinkActive="activo">
        Productos
      </a>
    </nav>

    <hr>

    <router-outlet />
  `,
  styles: [`
    nav a {
      margin-right: 1rem;
      text-decoration: none;
      color: #333;
    }

    .activo {
      color: #DD0031;
      font-weight: bold;
      border-bottom: 2px solid #DD0031;
    }
  `]
})

export class App {
  protected readonly title = signal('routing');
}
