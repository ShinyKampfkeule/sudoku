import { GameRoomData } from "@/src/interfaces/gameRoomData";
import { Dispatch, SetStateAction } from "react";

export const updatePuzzleDifficulty = (
  value: "easy" | "medium" | "hard",
  setGameRoomData: Dispatch<SetStateAction<GameRoomData>>,
) => {
  setGameRoomData((prev) => ({
    ...prev,
    puzzleDifficulty: value,
  }));
};
