import { GameRoomData } from "@/src/interfaces/gameRoomData";
import { Dispatch, SetStateAction } from "react";

export const updateRoomVisibility = (
  value: "visible" | "hidden",
  setGameRoomData: Dispatch<SetStateAction<GameRoomData>>,
) => {
  setGameRoomData((prev) => ({
    ...prev,
    visible: value === "visible",
  }));
};
