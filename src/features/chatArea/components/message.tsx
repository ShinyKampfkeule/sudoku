import { SmileyBtn } from "./smileyBtn";
import { SendBtn } from "./sendBtn";
import { MessageInput } from "./messageInput";
import { FormEvent } from "react";
import { socket } from "@/app/socket";

interface Props {
  roomID: string;
}

export const Message = ({ roomID }: Props) => {
  const sentMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const message = data.get("message") as string;
    console.log("Sent Message");
    console.log(message);

    socket.emit("sendMessage", { message, roomID });
  };

  return (
    <form
      className="flex border border-secondary rounded-md p-2.5 gap-2.5 m-4 shrink-0"
      onSubmit={(event) => sentMessage(event)}
    >
      <MessageInput />
      <div className="flex flex-col gap-2">
        <SmileyBtn />
        <SendBtn />
      </div>
    </form>
  );
};
