import { Dispatch, SetStateAction } from "react";
import { GameplayInputs } from "./gameplayInputs";
import { NumberInputs } from "./numberInputs";
import { NoteInputs } from "./noteInputs";
import { PlayerSolutionInterface } from "@/src/interfaces/playerSolution";
import { MoveHistoryInterface } from "@/src/interfaces/moveHistory";

interface Props {
  activeField: number;
  currentPlayerSolution: PlayerSolutionInterface;
  setCurrentPlayerSolution: Dispatch<SetStateAction<PlayerSolutionInterface>>;
  noteMode: boolean;
  setNoteMode: Dispatch<SetStateAction<boolean>>;
  moveHistory: MoveHistoryInterface[];
  setActiveField: Dispatch<SetStateAction<number>>;
  setMoveHistory: Dispatch<SetStateAction<MoveHistoryInterface[]>>;
}

export const InputsContainer = ({
  activeField,
  currentPlayerSolution,
  setCurrentPlayerSolution,
  noteMode,
  setNoteMode,
  moveHistory,
  setActiveField,
  setMoveHistory,
}: Props) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-4">
        {noteMode ? (
          <NoteInputs
            activeField={activeField}
            currentPlayerSolution={currentPlayerSolution}
            setCurrentPlayerSolution={setCurrentPlayerSolution}
          />
        ) : (
          <NumberInputs
            activeField={activeField}
            currentPlayerSolution={currentPlayerSolution}
            setCurrentPlayerSolution={setCurrentPlayerSolution}
          />
        )}
      </div>
      <GameplayInputs
        noteMode={noteMode}
        setNoteMode={setNoteMode}
        moveHistory={moveHistory}
        setCurrentPlayerSolution={setCurrentPlayerSolution}
        setActiveField={setActiveField}
        setMoveHistory={setMoveHistory}
      />
    </div>
  );
};
