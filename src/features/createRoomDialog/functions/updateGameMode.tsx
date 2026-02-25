import { GameRoomData } from "@/src/interfaces/gameRoomData";
import { Dispatch, SetStateAction } from "react";

export const updateGameMode = (
  value: "speed" | "points" | "bestOf",
  setGameRoomData: Dispatch<SetStateAction<GameRoomData>>,
) => {
  setGameRoomData((prev) => ({
    ...prev,
    gameMode: value,
  }));
};
