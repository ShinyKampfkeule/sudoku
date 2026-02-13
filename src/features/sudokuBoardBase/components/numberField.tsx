import { Dispatch, SetStateAction } from "react";
import { SolutionField } from "./solutionField";
import { NotesField } from "./notesField";
import { PlayerSolutionInterface } from "@/src/interfaces/playerSolution";
import { EmptyField } from "./emptyField";
import { fieldHasNotes } from "../functions/fieldHasNotes";
import { getBorderStyleCalss } from "../functions/getBorderStyleClass";
import { UnknownField } from "./unknownField";

interface Props {
  number: string;
  index: number;
  activeField: number;
  setActiveField: Dispatch<SetStateAction<number>>;
  currentPlayerSolution: PlayerSolutionInterface;
  playerBoard: boolean;
}

export const NumberField = ({
  number,
  index,
  activeField,
  setActiveField,
  currentPlayerSolution,
  playerBoard,
}: Props) => {
  return (
    <div
      className={getBorderStyleCalss(index, playerBoard)}
      onClick={() => setActiveField(index)}
    >
      {number !== "x" && number !== "?" ? (
        <SolutionField
          number={number}
          activeField={activeField}
          index={index}
          playerBoard={playerBoard}
        />
      ) : number === "?" ? (
        <UnknownField
          activeField={activeField}
          index={index}
          playerBoard={playerBoard}
        />
      ) : fieldHasNotes(currentPlayerSolution, index) && playerBoard ? (
        <NotesField
          index={index}
          activeField={activeField}
          currentPlayerSolution={currentPlayerSolution}
        />
      ) : (
        <EmptyField
          activeField={activeField}
          index={index}
          playerBoard={playerBoard}
        />
      )}
    </div>
  );
};
