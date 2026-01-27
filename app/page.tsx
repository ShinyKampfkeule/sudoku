"use client";

import { InputsContainer } from "@/src/features/inputs/compontents/inputsContainer";
import { SudokuBoard } from "@/src/features/sudokuBoard/components/sudokuBoard";
import { useState } from "react";
import puzzles from "@/src/json/puzzles.json";
import { PlayerSolutionInterface } from "@/src/interfaces/playerSolution";
import { PuzzlesInterface } from "@/src/interfaces/puzzles";
import { Header } from "@/src/features/header/components/header";
import { MoveHistoryInterface } from "@/src/interfaces/moveHistory";

export default function Home() {
  const currentPuzzle: string = "1";
  const puzzlesObject: PuzzlesInterface = puzzles;
  const [elapsedTime, setElapsedTime] = useState(0);
  const [puzzleActive, setPuzzleActive] = useState(true);
  const [noteMode, setNoteMode] = useState(false);
  const [activeField, setActiveField] = useState<number>(0);
  const [currentPlayerSolution, setCurrentPlayerSolution] =
    useState<PlayerSolutionInterface>({
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
  const [moveHistory, setMoveHistory] = useState<MoveHistoryInterface[]>([
    {
      playerSolution: {
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
      },
      activeField: 0,
    },
  ]);

  return (
    <div className="p-2 h-full">
      <Header
        elapsedTime={elapsedTime}
        setElapsedTime={setElapsedTime}
        puzzleActive={puzzleActive}
      />
      <div className="flex flex-col justify-center items-center h-[calc(100%-208px)] gap-10">
        <SudokuBoard
          activeField={activeField}
          setActiveField={setActiveField}
          currentPlayerSolution={currentPlayerSolution}
          setCurrentPlayerSolution={setCurrentPlayerSolution}
          noteMode={noteMode}
          setNoteMode={setNoteMode}
          currentPuzzle={currentPuzzle}
          elapsedTime={elapsedTime}
          setPuzzleActive={setPuzzleActive}
          moveHistory={moveHistory}
          setMoveHistory={setMoveHistory}
        />
        <InputsContainer
          activeField={activeField}
          currentPlayerSolution={currentPlayerSolution}
          setCurrentPlayerSolution={setCurrentPlayerSolution}
          noteMode={noteMode}
          setNoteMode={setNoteMode}
          moveHistory={moveHistory}
          setActiveField={setActiveField}
          setMoveHistory={setMoveHistory}
        />
      </div>
    </div>
  );
}
