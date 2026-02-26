import { RoomType } from "./roomType";
import { GameRoomData } from "@/src/interfaces/gameRoomData";
import { Dispatch, SetStateAction } from "react";
import { RoomName } from "./roomName";
import { RoomPassword } from "./roomPassword";
import { RoomVisibility } from "./roomVisibility";

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
      <div className="flex gap-16">
        <RoomType
          isPublic={gameRoomData.public}
          setGameRoomData={setGameRoomData}
        />
        <RoomVisibility
          isVisible={gameRoomData.visible}
          setGameRoomData={setGameRoomData}
          isPublic={gameRoomData.public}
        />
      </div>
      {!gameRoomData.public && (
        <RoomPassword
          gameRoomData={gameRoomData}
          setGameRoomData={setGameRoomData}
        />
      )}
    </div>
  );
};
