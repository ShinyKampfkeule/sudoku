import { PlayerSolutionInterface } from "@/src/interfaces/playerSolution";

export const notedNumbers = (
  currentPlayerSolution: PlayerSolutionInterface,
  index: number
) => {
  const notedNumbersArray: string[] = [];

  Object.entries(currentPlayerSolution.notes).forEach(([number, notes]) => {
    if (notes.includes(index)) {
      notedNumbersArray.push(number);
    }
  });

  return notedNumbersArray;
};
