import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TETROMINOS } from './TETROMINOS';
import { piece } from './piece';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('tetris');
  
  ROWS :number = 20
  COLS :number = 10

  board: number[][] = Array.from({ length: this.ROWS }, () => Array(this.COLS).fill(0));


  currentPiece = new piece(TETROMINOS.T, 0, 0, this.board);

  constructor() {
    console.log(this.board)
  }


}
