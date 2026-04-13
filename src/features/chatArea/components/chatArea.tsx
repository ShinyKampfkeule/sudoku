"use client";

import { useState } from "react";
import { Chat } from "./chat";
import { Header } from "./header";
import { Message } from "./message";

interface Props {
  initialRoomData: {
    id: string;
    name: string;
  };
  usersInRoom: number;
}

export const ChatArea = ({ initialRoomData, usersInRoom }: Props) => {
  const [currentRoomData, setCurrentRoomData] = useState<{
    id: string;
    name: string;
  }>(initialRoomData);

  return (
    <div className="flex flex-col bg-primary w-80 h-full rounded-t-md text-primary-foreground">
      <Header
        currentRoomData={currentRoomData}
        usersInRoom={usersInRoom}
      />
      <Chat />
      <Message roomID={currentRoomData.id} />
    </div>
  );
};
