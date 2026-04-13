import { socket } from "@/app/socket";
import { Button } from "@/components/ui/button";
import { ActiveRoomDataInterface } from "@/src/interfaces/activeRoomData";
import { Dispatch, SetStateAction, useEffect } from "react";

interface Props {
  isOpponent: boolean;
  playerIsReady: boolean;
  setPlayerIsReady: Dispatch<SetStateAction<boolean>>;
  roomData: ActiveRoomDataInterface;
}

export const DPIReadyInteraction = ({
  isOpponent,
  playerIsReady,
  setPlayerIsReady,
  roomData,
}: Props) => {
  const handleBtnClick = () => {
    const newReadyStatus = !playerIsReady;
    setPlayerIsReady(newReadyStatus);
    socket.emit("playersReadyStatus", roomData.id, newReadyStatus);
  };

  if (isOpponent)
    return (
      <div className="flex justify-center items-center h-9 mt-2">
        <span>{playerIsReady ? "Ready" : "Not Ready"}</span>
      </div>
    );

  return (
    <Button
      className={`mt-2 ${!playerIsReady && "bg-red-500 hover:bg-red-600"}`}
      onClick={handleBtnClick}
    >
      {playerIsReady ? "Ready" : "Not Ready"}
    </Button>
  );
};
