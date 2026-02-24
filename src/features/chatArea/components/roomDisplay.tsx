import { ChevronDown, MessageSquareText } from "lucide-react";

export const RoomDisplay = () => {
  return (
    <div className="flex items-center gap-2.5">
      <MessageSquareText />
      <span>Lobby</span>
      <ChevronDown />
    </div>
  );
};
