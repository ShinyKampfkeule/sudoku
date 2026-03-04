import { RoomType } from "./roomType";
import { CreateRoomDataInterface } from "@/src/interfaces/createRoomData";
import { Dispatch, SetStateAction } from "react";
import { RoomName } from "./roomName";
import { RoomPassword } from "./roomPassword";
import { RoomVisibility } from "./roomVisibility";

interface Props {
  gameRoomData: CreateRoomDataInterface;
  setGameRoomData: Dispatch<SetStateAction<CreateRoomDataInterface>>;
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
