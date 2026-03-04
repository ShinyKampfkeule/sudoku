import { CreateRoomDataInterface } from "@/src/interfaces/createRoomData";
import { GameModeType } from "@/src/types/gameMode";
import { Dispatch, SetStateAction } from "react";

export const updateGameMode = (
  value: GameModeType,
  setGameRoomData: Dispatch<SetStateAction<CreateRoomDataInterface>>,
) => {
  setGameRoomData((prev) => ({
    ...prev,
    gameMode: value,
  }));
};
