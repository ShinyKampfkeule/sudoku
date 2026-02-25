import { GameRoomData } from "@/src/interfaces/gameRoomData";
import { Dispatch, SetStateAction } from "react";

export const updateRoomType = (
  value: "open" | "private",
  setGameRoomData: Dispatch<SetStateAction<GameRoomData>>,
) => {
  setGameRoomData((prev) => ({
    ...prev,
    roomType: value,
  }));
};
