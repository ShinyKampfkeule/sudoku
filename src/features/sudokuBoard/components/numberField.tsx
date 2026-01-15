import { Dispatch, SetStateAction } from "react";
import { SolutionField } from "./solutionField";
import { NotesField } from "./notesField";
import { PlayerSolutionInterface } from "@/src/interfaces/playerSolution";
import { EmptyField } from "./emptyField";

interface Props {
  number: string;
  index: number;
  activeField: number;
  setActiveField: Dispatch<SetStateAction<number>>;
  currentPlayerSolution: PlayerSolutionInterface;
}

export const NumberField = ({
  number,
  index,
  activeField,
  setActiveField,
  currentPlayerSolution,
}: Props) => {
  let borderClasses = "flex justify-center items-center p-1";

  if (index % 9 === 8) {
    borderClasses += " border-r-0";
  } else if (index % 9 === 2 || index % 9 === 5) {
    borderClasses += " border-r-4";
  } else {
    borderClasses += " border-r-2";
  }

  if (index >= 72) {
    borderClasses += " border-b-0";
  } else if ((18 <= index && index <= 26) || (45 <= index && index <= 53)) {
    borderClasses += " border-b-4";
  } else {
    borderClasses += " border-b-2";
  }

  return (
    <div
      className={borderClasses}
      onClick={() => setActiveField(index)}
    >
      {number !== "x" ? (
        <SolutionField
          number={number}
          activeField={activeField}
          index={index}
        />
      ) : currentPlayerSolution.notes[index].length !== 0 ? (
        <NotesField
          index={index}
          activeField={activeField}
          currentPlayerSolution={currentPlayerSolution}
        />
      ) : (
        <EmptyField
          activeField={activeField}
          index={index}
        />
      )}
    </div>
  );
};
