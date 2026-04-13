import { socket } from "@/app/socket";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect, useState } from "react";
import { ChatMessageContainer } from "../../chatMessage.tsx/components/chatMessageContainer";

export const Chat = () => {
  const [chatStatus, setChatStatus] = useState<string>("Connecting...");
  const [messages, setMessages] = useState<
    { sender: string; message: string; sent: number }[]
  >([]);

  useEffect(() => {
    const onReceiveMessage = (
      sender: string,
      message: string,
      timestamp: number,
    ) => {
      setMessages((prev) => [
        ...prev,
        {
          sender: sender,
          message: message,
          sent: timestamp,
        },
      ]);
    };

    const onConnect = () => {
      setChatStatus("Connected!");
    };

    socket.on("connect", onConnect);
    socket.on("receiveMessage", onReceiveMessage);

    return () => {
      socket.off("connect", onConnect);
      socket.off("receiveMessage", onReceiveMessage);
    };
  }, []);

  return (
    <ScrollArea
      className="flex-1 min-h-0 border-b"
      viewportClassName="flex flex-col-reverse"
    >
      <div className="flex flex-col p-4 gap-4">
        <div className="flex justify-center items-center bg-secondary/30 h-8">
          <span>{chatStatus}</span>
        </div>
        {messages.map((message, index) => (
          <ChatMessageContainer
            key={index}
            message={message}
          />
        ))}
      </div>
    </ScrollArea>
  );
};
