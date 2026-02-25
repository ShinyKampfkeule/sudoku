import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GameRoomData } from "@/src/interfaces/gameRoomData";
import { Dispatch, SetStateAction } from "react";
import { handleRoomInput } from "../functions/handleRoomInput";

interface Props {
  gameRoomData: GameRoomData;
  setGameRoomData: Dispatch<SetStateAction<GameRoomData>>;
}

export const RoomName = ({ gameRoomData, setGameRoomData }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <Label>Room Name</Label>
      <Input
        placeholder="Room Name"
        name="roomName"
        value={gameRoomData.roomName}
        onInput={(input) => handleRoomInput(input, setGameRoomData, "roomName")}
      />
    </div>
  );
};
