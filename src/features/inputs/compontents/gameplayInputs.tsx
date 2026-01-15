import { Eraser, Lightbulb, Pencil, RotateCcw } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { GameplayInputContainer } from "./gameplayInputContainer";

interface Props {
  noteMode: boolean;
  setNoteMode: Dispatch<SetStateAction<boolean>>;
}

export const GameplayInputs = ({ noteMode, setNoteMode }: Props) => {
  return (
    <div className="relative flex gap-4">
      <div className="absolute right-0 flex justify-center items-center bg-red-500/75 w-3/4 h-full z-1">
        <span className="text-2xl font-extrabold text-white">Coming soon</span>
      </div>
      <GameplayInputContainer
        disabled={false}
        clickFunction={() => setNoteMode(!noteMode)}
        icon={<Pencil />}
        label="Note"
      />
      <GameplayInputContainer
        disabled={true}
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
