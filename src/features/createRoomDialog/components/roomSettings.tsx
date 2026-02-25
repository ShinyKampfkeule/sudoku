import { RoomType } from "./roomType";
import { GameRoomData } from "@/src/interfaces/gameRoomData";
import { Dispatch, SetStateAction } from "react";
import { RoomName } from "./roomName";
import { RoomPassword } from "./roomPassword";

interface Props {
  gameRoomData: GameRoomData;
  setGameRoomData: Dispatch<SetStateAction<GameRoomData>>;
}

export const RoomSettings = ({ gameRoomData, setGameRoomData }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <RoomName
        gameRoomData={gameRoomData}
        setGameRoomData={setGameRoomData}
      />
      <RoomType
        roomType={gameRoomData.roomType}
        setGameRoomData={setGameRoomData}
      />
      {gameRoomData.roomType === "private" && (
        <RoomPassword
          gameRoomData={gameRoomData}
          setGameRoomData={setGameRoomData}
        />
      )}
    </div>
  );
};
