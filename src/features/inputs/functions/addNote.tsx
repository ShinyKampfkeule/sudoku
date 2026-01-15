import { PlayerSolutionInterface } from "@/src/interfaces/playerSolution";
import { Dispatch, SetStateAction } from "react";

export const addNote = (
  currentPlayerSolution: PlayerSolutionInterface,
  num: number,
  activeField: number,
  setCurrentPlayerSolution: Dispatch<SetStateAction<PlayerSolutionInterface>>
) => {
  const newCurrentPlayerSolution = { ...currentPlayerSolution };
  const stringedNum = num.toString();

  if (newCurrentPlayerSolution.notes[activeField].includes(stringedNum)) {
    newCurrentPlayerSolution.notes[activeField] =
      newCurrentPlayerSolution.notes[activeField].filter(
        (note) => note !== stringedNum
      );
  } else {
    newCurrentPlayerSolution.notes[activeField].push(stringedNum);
    newCurrentPlayerSolution.notes[activeField].sort();
  }

  setCurrentPlayerSolution(newCurrentPlayerSolution);
};
