import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-producto-detalle',
  standalone: true,
  imports: [RouterLink],
  template: `
    <h2>Detalle del producto</h2>
    <p>ID del producto: {{ id }}</p>

    <a routerLink="/productos"><- Volver</a>
  `
})
export class ProductoDetalle{
  private route = inject(ActivatedRoute);
  id = this.route.snapshot.paramMap.get('id');
}
