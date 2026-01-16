"use client";

import { InputsContainer } from "@/src/features/inputs/compontents/inputsContainer";
import { SudokuBoard } from "@/src/features/sudokuBoard/components/sudokuBoard";
import { useState } from "react";
import puzzles from "@/src/json/puzzles.json";
import { PlayerSolutionInterface } from "@/src/interfaces/playerSolution";

export default function Home() {
  const currentPuzzle: number = 2;
  const [noteMode, setNoteMode] = useState(false);
  const [activeField, setActiveField] = useState<number>(0);
  const [currentPlayerSolution, setCurrentPlayerSolution] =
    useState<PlayerSolutionInterface>({
      solution: puzzles.expert[currentPuzzle].empty,
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

  return (
    <div className="p-2 h-full">
      <div className="h-52">
        <span>Header</span>
      </div>
      <div className="flex flex-col justify-center items-center h-[calc(100%-208px)] gap-10">
        <SudokuBoard
          activeField={activeField}
          setActiveField={setActiveField}
          currentPlayerSolution={currentPlayerSolution}
          setCurrentPlayerSolution={setCurrentPlayerSolution}
          noteMode={noteMode}
          setNoteMode={setNoteMode}
          currentPuzzle={currentPuzzle}
        />
        <InputsContainer
          activeField={activeField}
          currentPlayerSolution={currentPlayerSolution}
          setCurrentPlayerSolution={setCurrentPlayerSolution}
          noteMode={noteMode}
          setNoteMode={setNoteMode}
        />
      </div>
    </div>
  );
}
