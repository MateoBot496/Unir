import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hijo } from './components/hijo/hijo';
import { Padre } from './components/padre/padre';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Padre],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app');
}
