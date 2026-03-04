import { useState } from "react";
import { Chat } from "./chat";
import { Header } from "./header";
import { Message } from "./message";

interface Props {
  initialRoomData: {
    id: string;
    name: string;
  };
}

export const ChatArea = ({ initialRoomData }: Props) => {
  const [currentRoomData, setCurrentRoomData] = useState<{
    id: string;
    name: string;
  }>(initialRoomData);

  return (
    <div className="flex flex-col bg-primary w-80 h-full rounded-t-md">
      <Header currentRoomData={currentRoomData} />
      <Chat />
      <Message roomID={currentRoomData.id} />
    </div>
  );
};
