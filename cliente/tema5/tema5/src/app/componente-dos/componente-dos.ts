import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-componente-dos',
  imports: [],
  templateUrl: './componente-dos.html',
  styleUrl: './componente-dos.css',
})
export class ComponenteDos {
  @Input() nombre: string = '';
  @Input() color: string = '';
}
