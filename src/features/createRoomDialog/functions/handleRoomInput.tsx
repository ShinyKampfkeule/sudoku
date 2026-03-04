import { CreateRoomDataInterface } from "@/src/interfaces/createRoomData";
import { Dispatch, FormEvent, SetStateAction } from "react";

export const handleRoomInput = (
  input: FormEvent<HTMLInputElement>,
  setGameRoomData: Dispatch<SetStateAction<CreateRoomDataInterface>>,
  key: "name" | "password",
) => {
  setGameRoomData((prev) => ({
    ...prev,
    [key]: input.currentTarget.value,
  }));
};
