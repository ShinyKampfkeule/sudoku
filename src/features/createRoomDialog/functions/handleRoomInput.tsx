import { GameRoomData } from "@/src/interfaces/gameRoomData";
import { Dispatch, FormEvent, SetStateAction } from "react";

export const handleRoomInput = (
  input: FormEvent<HTMLInputElement>,
  setGameRoomData: Dispatch<SetStateAction<GameRoomData>>,
  key: "roomName" | "password",
) => {
  setGameRoomData((prev) => ({
    ...prev,
    [key]: input.currentTarget.value,
  }));
};
