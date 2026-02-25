import { GameRoomData } from "@/src/interfaces/gameRoomData";
import { PuzzleDifficulty } from "./puzzleDifficulty";
import { GameMode } from "./gameMode";
import { Dispatch, SetStateAction } from "react";

interface Props {
  gameRoomData: GameRoomData;
  setGameRoomData: Dispatch<SetStateAction<GameRoomData>>;
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
