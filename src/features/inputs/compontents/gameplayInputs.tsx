import { Eraser, Lightbulb, Pencil, RotateCcw } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { GameplayInputContainer } from "./gameplayInputContainer";
import { undoLastStep } from "@/src/functions/undoLastStep";
import { MoveHistoryInterface } from "@/src/interfaces/moveHistory";
import { PlayerSolutionInterface } from "@/src/interfaces/playerSolution";

interface Props {
  noteMode: boolean;
  setNoteMode: Dispatch<SetStateAction<boolean>>;
  moveHistory: MoveHistoryInterface[];
  setCurrentPlayerSolution: Dispatch<SetStateAction<PlayerSolutionInterface>>;
  setActiveField: Dispatch<SetStateAction<number>>;
  setMoveHistory: Dispatch<SetStateAction<MoveHistoryInterface[]>>;
}

export const GameplayInputs = ({
  noteMode,
  setNoteMode,
  moveHistory,
  setCurrentPlayerSolution,
  setActiveField,
  setMoveHistory,
}: Props) => {
  return (
    <div className="relative flex gap-4">
      <div className="absolute right-0 flex justify-center items-center bg-red-500/75 w-1/2 h-full z-1">
        <span className="text-xl font-extrabold text-white">Coming soon</span>
      </div>
      <GameplayInputContainer
        disabled={false}
        clickFunction={() => setNoteMode(!noteMode)}
        icon={<Pencil />}
        label="Note"
      />
      <GameplayInputContainer
        disabled={false}
        clickFunction={() =>
          undoLastStep(
            moveHistory,
            setCurrentPlayerSolution,
            setActiveField,
            setMoveHistory,
          )
        }
        icon={<RotateCcw />}
        label="Undo"
      />
      <GameplayInputContainer
        disabled={true}
        icon={<Eraser />}
        label="Erase"
      />
      <GameplayInputContainer
        disabled={true}
        icon={<Lightbulb />}
        label="Hint"
      />
    </div>
  );
};
