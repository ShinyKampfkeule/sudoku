import { PlayerSolutionInterface } from "@/src/interfaces/playerSolution";
import { NotesNumber } from "./notesNumber";
import { notedNumbers } from "../functions/notedNumbers";

interface Props {
  index: number;
  activeField: number;
  currentPlayerSolution: PlayerSolutionInterface;
}

export const NotesField = ({
  index,
  activeField,
  currentPlayerSolution,
}: Props) => {
  return (
    <div
      className={`w-12 h-12 grid gap-0.5 grid-cols-3 grid-rows-3 rounded-lg border-2 overflow-hidden bg-white/10 ${
        activeField === index ? "border-white" : "border-transparent"
      }`}
    >
      {notedNumbers(currentPlayerSolution, index).map((note) => (
        <NotesNumber
          key={note}
          note={note}
        />
      ))}
    </div>
  );
};
