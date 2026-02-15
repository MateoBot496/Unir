import { TETROMINOS } from "./TETROMINOS";

export type TetrominoType = typeof TETROMINOS[keyof typeof TETROMINOS];
