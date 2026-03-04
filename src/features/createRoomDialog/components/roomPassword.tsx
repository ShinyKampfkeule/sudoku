import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreateRoomDataInterface } from "@/src/interfaces/createRoomData";
import { Dispatch, SetStateAction } from "react";
import { handleRoomInput } from "../functions/handleRoomInput";

interface Props {
  gameRoomData: CreateRoomDataInterface;
  setGameRoomData: Dispatch<SetStateAction<CreateRoomDataInterface>>;
}

export const RoomPassword = ({ gameRoomData, setGameRoomData }: Props) => {
  if (gameRoomData.public) return;

  return (
    <div className="flex flex-col gap-2">
      <Label>Password</Label>
      <Input
        placeholder="Password"
        name="password"
        value={gameRoomData.password}
        onInput={(input) => handleRoomInput(input, setGameRoomData, "password")}
      />
    </div>
  );
};
