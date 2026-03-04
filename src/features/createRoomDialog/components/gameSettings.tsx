import { CreateRoomDataInterface } from "@/src/interfaces/createRoomData";
import { PuzzleDifficulty } from "./puzzleDifficulty";
import { GameMode } from "./gameMode";
import { Dispatch, SetStateAction } from "react";

interface Props {
  gameRoomData: CreateRoomDataInterface;
  setGameRoomData: Dispatch<SetStateAction<CreateRoomDataInterface>>;
}

export const GameSettings = ({ gameRoomData, setGameRoomData }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <GameMode
        setGameRoomData={setGameRoomData}
        gameMode={gameRoomData.gameMode}
      />
      <PuzzleDifficulty
        setGameRoomData={setGameRoomData}
        puzzleDifficulty={gameRoomData.puzzleDifficulty}
      />
    </div>
  );
};
