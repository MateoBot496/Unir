import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlujoIf } from "./components/flujo-if/flujo-if";
import { FlujoFor } from './components/flujo-for/flujo-for';
import { FlujoSwitch} from './flujo-switch/flujo-switch';
import { Resaltar } from "./directives/resaltar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FlujoIf, FlujoFor, FlujoSwitch, Resaltar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tema6');
}
