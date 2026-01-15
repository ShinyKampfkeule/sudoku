import { PlayerSolutionInterface } from "@/src/interfaces/playerSolution";
import { Dispatch, SetStateAction } from "react";
import { NoteButtonField } from "./noteButtonField";
import { addNote } from "../functions/addNote";

interface Props {
  num: number;
  activeField: number;
  currentPlayerSolution: PlayerSolutionInterface;
  setCurrentPlayerSolution: Dispatch<SetStateAction<PlayerSolutionInterface>>;
}

export const NoteButton = ({
  num,
  activeField,
  currentPlayerSolution,
  setCurrentPlayerSolution,
}: Props) => {
  const noteButtons = [];
  for (let i = 1; i <= 9; i++) {
    noteButtons.push(
      <NoteButtonField
        num={num}
        displayNumber={num === i}
      />
    );
  }

  return (
    <div
      className={`row-span-2 row-start-${num} col-start-${
        num % 2 === 1 ? 1 : 2
      } grid grid-cols-3 grid-rows-3 gap-0.5 cursor-pointer hover:bg-gray-100/10 rounded-md`}
      onClick={() =>
        addNote(
          currentPlayerSolution,
          num,
          activeField,
          setCurrentPlayerSolution
        )
      }
    >
      {noteButtons}
    </div>
  );
};
