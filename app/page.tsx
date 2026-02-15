"use client";

import { InputsContainer } from "@/src/features/inputs/compontents/inputsContainer";
import { FormEvent, useEffect, useState, useRef } from "react";
import puzzles from "@/src/json/puzzles.json";
import { PlayerSolutionInterface } from "@/src/interfaces/playerSolution";
import { PuzzlesInterface } from "@/src/interfaces/puzzles";
import { Header } from "@/src/features/header/components/header";
import { MoveHistoryInterface } from "@/src/interfaces/moveHistory";
import { socket } from "./socket";
import { PlayerSudokuBoard } from "@/src/features/playerSudokuBoard/components/playerSudokuBoard";
import { OpponentSudokuBoard } from "@/src/features/opponentSudokuBoard/components/opponentSudokuBoard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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
  const [gameRoom, setGameRoom] = useState<string | null>(null);
  const [users, setUsers] = useState<{ userID: string; username: string }[]>(
    [],
  );

  const isSubmitting = useRef(false);

  useEffect(() => {
    const sessionID = localStorage.getItem("sessionID");

    if (sessionID) {
      socket.auth = { sessionID };
      socket.connect();
    }

    if (socket.connected) {
      onConnect();

      socket.emit("getUsers", { user: socket.id });
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

    const onGameCreated = (data: { room: string }) => {
      setGameRoom(data.room);
    };

    const onUsers = (users: { userID: string; username: string }[]) => {
      setUsers(users);
    };

    const onUserConnected = (data: { userID: string; username: string }) => {
      setUsers((prev) => [...prev, data]);
    };

    const onGameJoined = (data: { room: string }) => {
      setGameRoom(data.room);
    };

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("gameCreated", onGameCreated);
    socket.on("users", onUsers);
    socket.on("userConnected", onUserConnected);
    socket.on("gameJoined", onGameJoined);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("game created", onGameCreated);
      socket.off("users", onUsers);
      socket.off("userConnected", onUserConnected);
    };
  }, []);

  const createNewGame = () => {
    socket.emit("createGame");
  };

  const joinGame = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitting.current) return;
    isSubmitting.current = true;

    const data = new FormData(event.currentTarget);
    const room = data.get("gameRoom") as string;

    socket.emit("joinGame", { room });
  };

  return (
    <div className="p-2 h-full">
      <Header
        elapsedTime={elapsedTime}
        setElapsedTime={setElapsedTime}
        puzzleActive={puzzleActive}
      />
      <div className="grid grid-cols-3 grid-rows-1 h-[calc(100%-208px)]">
        <div className="flex flex-col justify-center items-center text-white gap-2">
          <div className="flex flex-col gap-2">
            {users.map((user) => (
              <p key={user.userID}>{user.username}</p>
            ))}
          </div>
          <p>Status: {isConnected ? "Connected" : "Disconnected"}</p>
          <p>Transport: {transport}</p>
          <p>Game Room: {gameRoom}</p>
          <div className="flex gap-2">
            <Button onClick={() => createNewGame()}>Create Game</Button>
            <form
              className="flex flex-col gap-2 justify-center items-center"
              onSubmit={joinGame}
            >
              <Input
                placeholder="Game Room"
                name="gameRoom"
              />
              <Button type="submit">Join Game</Button>
            </form>
          </div>
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
