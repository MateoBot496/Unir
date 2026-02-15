
import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { Productos } from './pages/productos/productos';
import { ProductoDetalle } from './pages/producto-detalle/producto-detalle';
import { Pagina404 } from './pages/pagina404/pagina404';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: Inicio },
  { path: 'productos', component: Productos },
  { path: 'producto/:id', component: ProductoDetalle },
  { path: '**', component: Pagina404 }
];
