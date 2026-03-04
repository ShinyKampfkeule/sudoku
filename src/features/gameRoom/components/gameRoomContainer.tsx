"use client";

import { useEffect, useState } from "react";
import { Header } from "../../header/components/header";
import { ChatArea } from "../../chatArea/components/chatArea";
import { RoomOverview } from "./roomOverview";
import { ActiveRoomDataInterface } from "@/src/interfaces/activeRoomData";
import { socket } from "@/app/socket";

interface Props {
  roomId: string;
}

export const GameRoomContainer = ({ roomId }: Props) => {
  const [roomData, setRoomData] = useState<ActiveRoomDataInterface | null>(
    null,
  );

  useEffect(() => {
    (async () => {
      const res = await fetch(
        `http://localhost:3000/api/gameRooms/getRoomInformation/${roomId}`,
      );
      if (res.ok) {
        const json = (await res.json()) as { room: ActiveRoomDataInterface };
        setRoomData(json.room);
        socket.emit("joinRoom", { room: json.room.id });
        socket.emit("getUsersInRoom", { room: json.room.id });
      }
    })();
  }, [roomId]);

  if (!roomData) return <span>Loading...</span>;

  return (
    <>
      <Header title={`Room: ${roomData.name}`} />
      <div className="flex-1 min-h-0 flex gap-4">
        <RoomOverview roomData={roomData} />
        <ChatArea initialRoomData={{ id: roomData.id, name: roomData.name }} />
      </div>
    </>
  );
};
