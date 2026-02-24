import { Ellipsis } from "lucide-react";
import { User } from "./user";

interface Props {
  sender: string;
  message: string;
}

export const UserAndMessage = ({ sender, message }: Props) => {
  return (
    <div className="flex flex-col gap-1.25 grow">
      <div className="flex justify-between items-center">
        <User sender={sender} />
        <Ellipsis
          size={16}
          className="cursor-pointer"
        />
      </div>
      <span>{message}</span>
    </div>
  );
};
