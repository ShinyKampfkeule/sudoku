import { socket } from "@/app/socket";
import { PlayerSolutionInterface } from "@/src/interfaces/playerSolution";
import { Dispatch, SetStateAction } from "react";

export const deleteInput = (
  currentPlayerSolution: PlayerSolutionInterface,
  noteMode: boolean,
  activeField: number,
  setCurrentPlayerSolution: Dispatch<SetStateAction<PlayerSolutionInterface>>,
  event: KeyboardEvent,
) => {
  const newCurrentPlayerSolution = { ...currentPlayerSolution };

  if (noteMode) {
    console.log("Add functionality for delete in note mode");
  } else {
    const newSolution = newCurrentPlayerSolution.solution.split("");
    newSolution[activeField] = "x";
    newCurrentPlayerSolution.solution = newSolution.join("");
  }

  socket.emit("numberInput", {
    field: activeField,
    added: false,
  });

  setCurrentPlayerSolution(newCurrentPlayerSolution);
  event.preventDefault();
};
