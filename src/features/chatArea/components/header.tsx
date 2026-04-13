import { OnlineCounter } from "./onlineCounter";
import { RoomDisplay } from "./roomDisplay";

interface Props {
  currentRoomData: {
    id: string;
    name: string;
  };
  usersInRoom: number;
}

export const Header = ({ currentRoomData, usersInRoom }: Props) => {
  return (
    <div className="flex shrink-0 justify-between p-4 border-b border-b-secondary">
      <RoomDisplay currentRoomData={currentRoomData} />
      <OnlineCounter usersInRoom={usersInRoom} />
    </div>
  );
};
