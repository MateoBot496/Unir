import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  imports: [],
  templateUrl: './hijo.html',
  styleUrl: './hijo.css',
})
export class Hijo {
  @Input() nombre: string = '';

  @Output() saludo = new EventEmitter<string>();

  emitirSaludo() : void {
    console.log('Emitiendo saludo desde el hijo');
    this.saludo.emit(`Hola, ${this.nombre}!`);
  }
}
