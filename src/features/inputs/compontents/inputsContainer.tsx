import { Dispatch, SetStateAction } from "react";
import { GameplayInputs } from "./gameplayInputs";
import { NumberInputs } from "./numberInputs";
import { NoteInputs } from "./noteInputs";
import { PlayerSolutionInterface } from "@/src/interfaces/playerSolution";

interface Props {
  activeField: number;
  currentPlayerSolution: PlayerSolutionInterface;
  setCurrentPlayerSolution: Dispatch<SetStateAction<PlayerSolutionInterface>>;
  noteMode: boolean;
  setNoteMode: Dispatch<SetStateAction<boolean>>;
}

export const InputsContainer = ({
  activeField,
  currentPlayerSolution,
  setCurrentPlayerSolution,
  noteMode,
  setNoteMode,
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
      />
    </div>
  );
};
