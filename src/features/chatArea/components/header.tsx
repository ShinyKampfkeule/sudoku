import { OnlineCounter } from "./onlineCounter";
import { RoomDisplay } from "./roomDisplay";

interface Props {
  currentRoomData: {
    id: string;
    name: string;
  };
}

export const Header = ({ currentRoomData }: Props) => {
  return (
    <div className="flex shrink-0 justify-between p-4 border-b border-b-secondary">
      <RoomDisplay currentRoomData={currentRoomData} />
      <OnlineCounter />
    </div>
  );
};
