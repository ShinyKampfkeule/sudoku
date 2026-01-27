import { PuzzleDataInterface } from "./puzzleData";

export interface PuzzlesInterface {
  expert: {
    [key: string]: PuzzleDataInterface;
  };
}
