import { CreateRoomDataInterface } from "@/src/interfaces/createRoomData";
import { PuzzleDifficultyType } from "@/src/types/puzzleDifficulty";
import { Dispatch, SetStateAction } from "react";

export const updatePuzzleDifficulty = (
  value: PuzzleDifficultyType,
  setGameRoomData: Dispatch<SetStateAction<CreateRoomDataInterface>>,
) => {
  setGameRoomData((prev) => ({
    ...prev,
    puzzleDifficulty: value,
  }));
};
