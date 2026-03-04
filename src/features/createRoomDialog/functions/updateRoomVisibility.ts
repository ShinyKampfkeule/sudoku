import { CreateRoomDataInterface } from "@/src/interfaces/createRoomData";
import { Dispatch, SetStateAction } from "react";

export const updateRoomVisibility = (
  value: "visible" | "hidden",
  setGameRoomData: Dispatch<SetStateAction<CreateRoomDataInterface>>,
) => {
  setGameRoomData((prev) => ({
    ...prev,
    visible: value === "visible",
  }));
};
