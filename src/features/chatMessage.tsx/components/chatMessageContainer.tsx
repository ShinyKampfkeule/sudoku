import { getDate } from "../functions/getDate";
import { UserIcon } from "./userIcon";
import { UserAndMessage } from "./userAndMessage";

interface Props {
  message: {
    sender: string;
    message: string;
    sent: number;
  };
}

export const ChatMessageContainer = ({ message }: Props) => {
  return (
    <div className="bg-secondary rounded-md flex flex-col items-end justify-between p-2.5 min-h-16 text-primary text-sm gap-4">
      <div className="flex gap-2.5 w-full">
        <UserIcon sender={message.sender} />
        <UserAndMessage
          sender={message.sender}
          message={message.message}
        />
      </div>
      <span className="text-xs">{getDate(message.sent)}</span>
    </div>
  );
};
