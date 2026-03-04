import { ChevronDown, MessageSquareText } from "lucide-react";

interface Props {
  currentRoomData: {
    id: string;
    name: string;
  };
}

export const RoomDisplay = ({ currentRoomData }: Props) => {
  return (
    <div className="flex items-center gap-2.5">
      <MessageSquareText />
      <span>{currentRoomData.name}</span>
      <ChevronDown />
    </div>
  );
};
