import { ActiveRoomDataInterface } from "@/src/interfaces/activeRoomData";
import { UserDisplay } from "./userDisplay";
import { Button } from "@/components/ui/button";
import { OpponentDisplay } from "./opponentDisplay";
import { useEffect, useState } from "react";
import { socket } from "@/app/socket";

interface Props {
  roomData: ActiveRoomDataInterface;
}

export const RoomOverview = ({ roomData }: Props) => {
  const [opponentID, setOpponentID] = useState<string | null>(null);

  useEffect(() => {
    socket.emit("joinRoom", { room: roomData.id });

    socket.on("roomJoined", (data: { room: string; user: string }) => {
      if (data.user === socket.userID) return;
      setOpponentID(data.user);
      alert(`User ${data.user} joined the Room!`);
    });

    socket.on("");
  }, [roomData]);

  return (
    <div className="flex flex-col items-center w-[calc(100%-21rem)] h-full bg-primary rounded-t-md p-4 gap-32">
      <div className="flex justify-center gap-16">
        <div className="flex w-35 flex-col gap-2 p-4 items-center border border-secondary rounded-md">
          <span className="">Game Mode</span>
          <span className="text-3xl">{roomData.gameMode}</span>
        </div>
        <div className="flex w-35 flex-col gap-2 p-4 items-center border border-secondary rounded-md">
          <span className="">Difficulty</span>
          <span className="text-3xl">{roomData.puzzleDifficulty}</span>
        </div>
      </div>
      <div className="flex justify-center items-center gap-16">
        <UserDisplay />
        <span className="text-7xl">0:0</span>
        <OpponentDisplay opponentID={opponentID} />
      </div>
      <Button className="w-48 h-12">Play</Button>
    </div>
  );
};
