import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreateRoomDataInterface } from "@/src/interfaces/createRoomData";
import { Dispatch, SetStateAction } from "react";
import { handleRoomInput } from "../functions/handleRoomInput";

interface Props {
  gameRoomData: CreateRoomDataInterface;
  setGameRoomData: Dispatch<SetStateAction<CreateRoomDataInterface>>;
}

export const RoomName = ({ gameRoomData, setGameRoomData }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <Label>Room Name</Label>
      <Input
        placeholder="Room Name"
        name="name"
        value={gameRoomData.name}
        onInput={(input) => handleRoomInput(input, setGameRoomData, "name")}
      />
    </div>
  );
};
