import { Chat } from "./chat";
import { Header } from "./header";
import { Message } from "./message";

export const ChatArea = () => {
  return (
    <div className="flex flex-col bg-primary w-80 h-full rounded-t-md">
      <Header />
      <Chat />
      <Message />
    </div>
  );
};
