import puzzles from "@/src/json/puzzles.json";
import { socket } from "@/app/socket";
import { PuzzlesInterface } from "@/src/interfaces/puzzles";
import { useState } from "react";
import { SudokuBoardBase } from "../../sudokuBoardBase/components/sudokuBoardBase";

interface Props {
  currentPuzzle: string;
}

export const OpponentSudokuBoard = ({ currentPuzzle }: Props) => {
  const puzzlesObject: PuzzlesInterface = puzzles;

  const [activeField, setActiveField] = useState(0);
  const [currentPlayerSolution, setCurrentPlayerSolution] = useState({
    solution: puzzlesObject.expert[currentPuzzle].empty,
    notes: {
      1: [],
      2: [],
      3: [],
      4: [],
      5: [],
      6: [],
      7: [],
      8: [],
      9: [],
    },
  });

  socket.on("activeField", (activeField: number) => {
    setActiveField(activeField);
  });

  socket.on("numberInput", (data: { field: number; added: boolean }) => {
    const newCurrentSolution = { ...currentPlayerSolution };
    const newSolution = currentPlayerSolution.solution.split("");
    newSolution[data.field] = data.added ? "?" : "x";
    newCurrentSolution.solution = newSolution.join("");
    console.log(newCurrentSolution.solution);
    setCurrentPlayerSolution(newCurrentSolution);
  });

  return (
    <SudokuBoardBase
      activeField={activeField}
      setActiveField={setActiveField}
      currentPlayerSolution={currentPlayerSolution}
      playerBoard={false}
    />
  );
};
