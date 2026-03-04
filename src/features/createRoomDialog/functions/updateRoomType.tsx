import { CreateRoomDataInterface } from "@/src/interfaces/createRoomData";
import { Dispatch, SetStateAction } from "react";

export const updateRoomType = (
  value: "open" | "private",
  setGameRoomData: Dispatch<SetStateAction<CreateRoomDataInterface>>,
) => {
  setGameRoomData((prev) => ({
    ...prev,
    public: value === "open",
  }));
};
