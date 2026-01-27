import { PlayerSolutionInterface } from "@/src/interfaces/playerSolution";

export const addNote = (
  currentPlayerSolution: PlayerSolutionInterface,
  num: number,
  activeField: number,
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

  return newCurrentPlayerSolution;
};
