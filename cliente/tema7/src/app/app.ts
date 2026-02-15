import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaColores } from "./components/lista-colores/lista-colores";
import { FormComponent } from './components/form-component/form-component';
import { FormReactivo } from './components/form-reactivo/form-reactivo';
import { FormValidado } from './components/form-validado/form-validado';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListaColores, FormComponent, FormReactivo, FormValidado],

  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tema7');
}
