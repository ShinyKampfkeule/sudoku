"use client";

import { InputsContainer } from "@/src/features/inputs/compontents/inputsContainer";
import { useEffect, useState } from "react";
import puzzles from "@/src/json/puzzles.json";
import { PlayerSolutionInterface } from "@/src/interfaces/playerSolution";
import { PuzzlesInterface } from "@/src/interfaces/puzzles";
import { Header } from "@/src/features/header/components/header";
import { MoveHistoryInterface } from "@/src/interfaces/moveHistory";
import { socket } from "./socket";
import { PlayerSudokuBoard } from "@/src/features/playerSudokuBoard/components/playerSudokuBoard";
import { OpponentSudokuBoard } from "@/src/features/opponentSudokuBoard/components/opponentSudokuBoard";

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
  const [isConnected, setIsConnected] = useState(false);
  const [transport, setTransport] = useState("N/A");

  useEffect(() => {
    if (socket.connected) {
      onConnect();
    }

    function onConnect() {
      setIsConnected(true);
      setTransport(socket.io.engine.transport.name);

      socket.io.engine.on("upgrade", (transport) => {
        setTransport(transport.name);
      });
    }

    function onDisconnect() {
      setIsConnected(false);
      setTransport("N/A");
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
    };
  }, []);

  return (
    <div className="p-2 h-full">
      <Header
        elapsedTime={elapsedTime}
        setElapsedTime={setElapsedTime}
        puzzleActive={puzzleActive}
      />
      <div className="grid grid-cols-3 grid-rows-1 h-[calc(100%-208px)]">
        <div className="flex flex-col justify-center items-center text-white">
          <p>Status: {isConnected ? "Connected" : "Disconnected"}</p>
          <p>Transport: {transport}</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-10">
          <PlayerSudokuBoard
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
        <div className="flex flex-col justify-center items-center gap-10">
          <OpponentSudokuBoard currentPuzzle={currentPuzzle} />
        </div>
      </div>
    </div>
  );
}
