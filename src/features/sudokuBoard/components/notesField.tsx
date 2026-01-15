import { PlayerSolutionInterface } from "@/src/interfaces/playerSolution";
import { NotesNumber } from "./notesNumber";

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
      className={`w-12 h-12 grid gap-0.5 grid-cols-3 grid-rows-3 gap-0.2 rounded-xl border-2 ${
        activeField === index
          ? "border-white overflow-hidden"
          : "border-transparent"
      }`}
    >
      {currentPlayerSolution.notes[index].map((note) => (
        <NotesNumber
          key={note}
          note={note}
        />
      ))}
    </div>
  );
};
