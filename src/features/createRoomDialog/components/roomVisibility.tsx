import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { GameRoomData } from "@/src/interfaces/gameRoomData";
import { Dispatch, SetStateAction } from "react";
import { Label } from "@/components/ui/label";
import { updateRoomVisibility } from "../functions/updateRoomVisibility";

interface Props {
  isVisible: boolean;
  setGameRoomData: Dispatch<SetStateAction<GameRoomData>>;
  isPublic: boolean;
}

export const RoomVisibility = ({
  isVisible,
  setGameRoomData,
  isPublic,
}: Props) => {
  if (isPublic) return;

  return (
    <div className="flex flex-col gap-2">
      <Label>Room Visibility</Label>
      <ToggleGroup
        type="single"
        variant="outline"
        spacing={2}
        defaultValue="open"
        size="sm"
        value={isVisible ? "visible" : "hidden"}
        onValueChange={(value: "visible" | "hidden") =>
          updateRoomVisibility(value, setGameRoomData)
        }
      >
        <ToggleGroupItem value="visible">Visible</ToggleGroupItem>
        <ToggleGroupItem value="hidden">Hidden</ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};
