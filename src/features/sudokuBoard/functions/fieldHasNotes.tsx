import { PlayerSolutionInterface } from "@/src/interfaces/playerSolution";

export const fieldHasNotes = (
  currentPlayerSolution: PlayerSolutionInterface,
  index: number
) => {
  let notesFound = false;

  Object.values(currentPlayerSolution.notes).forEach((notes) => {
    if (notes.includes(index)) notesFound = true;
  });

  return notesFound;
};
