"use client";

import { InputsContainer } from "@/src/features/inputs/compontents/inputsContainer";
import { SudokuBoard } from "@/src/features/sudokuBoard/components/sudokuBoard";
import { useState } from "react";
import puzzles from "@/src/json/puzzles.json";
import { PlayerSolutionInterface } from "@/src/interfaces/playerSolution";

export default function Home() {
  const [noteMode, setNoteMode] = useState(false);
  const [activeField, setActiveField] = useState<number>(0);
  const [currentPlayerSolution, setCurrentPlayerSolution] =
    useState<PlayerSolutionInterface>({
      solution: puzzles.expert[1].empty,
      notes: [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
      ],
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
