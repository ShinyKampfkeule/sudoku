import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { CreateRoomDataInterface } from "@/src/interfaces/createRoomData";
import { Dispatch, SetStateAction } from "react";
import { updateGameMode } from "../functions/updateGameMode";
import { GameModeType } from "@/src/types/gameMode";

interface Props {
  setGameRoomData: Dispatch<SetStateAction<CreateRoomDataInterface>>;
  gameMode: GameModeType;
}

export const GameMode = ({ setGameRoomData, gameMode }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <label>Game Mode</label>
      <ToggleGroup
        type="single"
        variant="outline"
        spacing={2}
        defaultValue="speed"
        size="sm"
        value={gameMode}
        onValueChange={(value: GameModeType) =>
          updateGameMode(value, setGameRoomData)
        }
      >
        <ToggleGroupItem value="speed">Speed</ToggleGroupItem>
        <ToggleGroupItem
          value="points"
          disabled
        >
          Points
        </ToggleGroupItem>
        <ToggleGroupItem
          value="bestOf"
          disabled
        >
          Best of
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};
