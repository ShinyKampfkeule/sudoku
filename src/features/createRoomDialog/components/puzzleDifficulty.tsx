import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { GameRoomData } from "@/src/interfaces/gameRoomData";
import { Dispatch, SetStateAction } from "react";
import { updatePuzzleDifficulty } from "../functions/updatePuzzleDifficulty";

interface Props {
  setGameRoomData: Dispatch<SetStateAction<GameRoomData>>;
  puzzleDifficulty: "easy" | "medium" | "hard";
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
        onValueChange={(value: "easy" | "medium" | "hard") =>
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
