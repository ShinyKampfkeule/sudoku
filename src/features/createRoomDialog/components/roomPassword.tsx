import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GameRoomData } from "@/src/interfaces/gameRoomData";
import { Dispatch, SetStateAction } from "react";
import { handleRoomInput } from "../functions/handleRoomInput";

interface Props {
  gameRoomData: GameRoomData;
  setGameRoomData: Dispatch<SetStateAction<GameRoomData>>;
}

export const RoomPassword = ({ gameRoomData, setGameRoomData }: Props) => {
  if (gameRoomData.roomType === "open") return;

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
