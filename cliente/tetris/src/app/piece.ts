import { TETROMINOS } from "./TETROMINOS";
import { TetrominoType } from "./types";

export class piece{
  pieceShape: TetrominoType;
  piecePosX: number;
  piecePosY: number;
  board: number[][];


  spawn( board : any){
    for(let row = 0; row < this.pieceShape.length; row++ ){
      for(let col = 0; col < this.pieceShape[row].length; col++){
        if(this.pieceShape[row][col] == 1){
          board[this.piecePosX + row][this.piecePosY + col] = 1;
        }
      }
    }
  }

  constructor( s: TetrominoType, x: number, y: number, board: number[][]){
    this.pieceShape = s;
    this.piecePosX= x;
    this.piecePosY = y;
    this.board = board;

    this.spawn(this.board);
  }


}
