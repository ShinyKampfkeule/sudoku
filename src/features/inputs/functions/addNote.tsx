import { PlayerSolutionInterface } from "@/src/interfaces/playerSolution";
import { Dispatch, SetStateAction } from "react";

export const addNote = (
  currentPlayerSolution: PlayerSolutionInterface,
  num: number,
  activeField: number,
  setCurrentPlayerSolution: Dispatch<SetStateAction<PlayerSolutionInterface>>
) => {
  const newCurrentPlayerSolution = { ...currentPlayerSolution };

  if (newCurrentPlayerSolution.notes[num].includes(activeField)) {
    newCurrentPlayerSolution.notes[num] = newCurrentPlayerSolution.notes[
      num
    ].filter((field) => field !== activeField);
  } else {
    newCurrentPlayerSolution.notes[num].push(activeField);
    newCurrentPlayerSolution.notes[num].sort();
  }

  setCurrentPlayerSolution(newCurrentPlayerSolution);
};
