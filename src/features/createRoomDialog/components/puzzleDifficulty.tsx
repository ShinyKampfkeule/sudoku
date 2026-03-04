import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { CreateRoomDataInterface } from "@/src/interfaces/createRoomData";
import { Dispatch, SetStateAction } from "react";
import { updatePuzzleDifficulty } from "../functions/updatePuzzleDifficulty";
import { PuzzleDifficultyType } from "@/src/types/puzzleDifficulty";

interface Props {
  setGameRoomData: Dispatch<SetStateAction<CreateRoomDataInterface>>;
  puzzleDifficulty: PuzzleDifficultyType;
}

export const PuzzleDifficulty = ({
  setGameRoomData,
  puzzleDifficulty,
}: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <label>Puzzle Difficulty</label>
      <ToggleGroup
        type="single"
        variant="outline"
        spacing={2}
        defaultValue="easy"
        size="sm"
        value={puzzleDifficulty}
        onValueChange={(value: PuzzleDifficultyType) =>
          updatePuzzleDifficulty(value, setGameRoomData)
        }
      >
        <ToggleGroupItem value="easy">Easy</ToggleGroupItem>
        <ToggleGroupItem
          value="medium"
          disabled
        >
          Medium
        </ToggleGroupItem>
        <ToggleGroupItem
          value="hard"
          disabled
        >
          Hard
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};
