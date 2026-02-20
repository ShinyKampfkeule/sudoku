import { Dispatch, SetStateAction } from "react";
import { NoteButton } from "./noteButton";
import { PlayerSolutionInterface } from "@/src/interfaces/playerSolution";

interface Props {
  activeField: number;
  currentPlayerSolution: PlayerSolutionInterface;
  setCurrentPlayerSolution: Dispatch<SetStateAction<PlayerSolutionInterface>>;
}

export const NoteInputs = ({ activeField, currentPlayerSolution, setCurrentPlayerSolution }: Props) => {
  const buttons = [];

  for (let num = 1; num <= 9; num++) {
    buttons.push(
      <NoteButton
        key={num}
        num={num}
        activeField={activeField}
        currentPlayerSolution={currentPlayerSolution}
        setCurrentPlayerSolution={setCurrentPlayerSolution}
      />
    );
  }

  return buttons;
};
