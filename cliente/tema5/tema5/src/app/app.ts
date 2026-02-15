import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponenteDos } from "./componente-dos/componente-dos";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ComponenteDos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tema5');

  nombre = 'Mateo';
  clicks = 0;
  color = 'blue';

  click() : void{
    this.clicks++;
  }

  changeColor() : void {
    this.color = this.color === 'blue' ? 'red' : 'blue';
  }
  saludar() : string {
    return `Hola ${this.nombre}, has hecho ${this.clicks} clicks`;
  }
}
