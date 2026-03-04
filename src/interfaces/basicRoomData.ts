import { GameModeType } from "../types/gameMode";
import { PuzzleDifficultyType } from "../types/puzzleDifficulty";

export interface BasicRoomDataInterface {
  name: string;
  gameMode: GameModeType;
  puzzleDifficulty: PuzzleDifficultyType;
}
