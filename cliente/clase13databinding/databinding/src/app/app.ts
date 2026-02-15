  import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
  import { RouterOutlet } from '@angular/router';

  @Component({
    selector: 'app-root',
    imports: [RouterOutlet, JsonPipe],
    templateUrl: './app.html',
    styleUrl: './app.css'
  })
  export class App {
    protected readonly title = signal('databinding');

    clicks = signal(0);
    ultimaTecla = signal<any | null>(null) ;


    onClick() {
      this.clicks.update((count) => count + 1);
    }
    onKeyDown(event: Event) {
      const keyboardEvent = event as KeyboardEvent;
      this.ultimaTecla.set(keyboardEvent.key);
    }
  }
