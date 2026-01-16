import { Dispatch, SetStateAction } from "react";
import { SolutionField } from "./solutionField";
import { NotesField } from "./notesField";
import { PlayerSolutionInterface } from "@/src/interfaces/playerSolution";
import { EmptyField } from "./emptyField";
import { fieldHasNotes } from "../functions/fieldHasNotes";
import { getBorderStyleCalss } from "../functions/getBorderStyleClass";

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
  return (
    <div
      className={getBorderStyleCalss(index)}
      onClick={() => setActiveField(index)}
    >
      {number !== "x" ? (
        <SolutionField
          number={number}
          activeField={activeField}
          index={index}
        />
      ) : fieldHasNotes(currentPlayerSolution, index) ? (
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
