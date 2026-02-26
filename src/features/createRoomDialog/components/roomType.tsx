import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { GameRoomData } from "@/src/interfaces/gameRoomData";
import { Dispatch, SetStateAction } from "react";
import { updateRoomType } from "../functions/updateRoomType";
import { Label } from "@/components/ui/label";

interface Props {
  isPublic: boolean;
  setGameRoomData: Dispatch<SetStateAction<GameRoomData>>;
}

export const RoomType = ({ isPublic, setGameRoomData }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <Label>Room Type</Label>
      <ToggleGroup
        type="single"
        variant="outline"
        spacing={2}
        defaultValue="open"
        size="sm"
        value={isPublic ? "open" : "private"}
        onValueChange={(value: "open" | "private") =>
          updateRoomType(value, setGameRoomData)
        }
      >
        <ToggleGroupItem value="open">Open</ToggleGroupItem>
        <ToggleGroupItem value="private">Private</ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};
