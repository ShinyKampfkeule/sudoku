import { Dispatch, SetStateAction } from "react";
import { NumberButton } from "./numberButton";
import { PlayerSolutionInterface } from "@/src/interfaces/playerSolution";

interface Props {
  activeField: number;
  currentPlayerSolution: PlayerSolutionInterface;
  setCurrentPlayerSolution: Dispatch<SetStateAction<PlayerSolutionInterface>>;
}

export const NumberInputs = ({ activeField, currentPlayerSolution, setCurrentPlayerSolution }: Props) => {
  const buttons = [];

  for (let num = 1; num <= 9; num++) {
    buttons.push(
      <NumberButton
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
