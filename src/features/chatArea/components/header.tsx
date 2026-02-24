import { OnlineCounter } from "./onlineCounter";
import { RoomDisplay } from "./roomDisplay";

export const Header = () => {
  return (
    <div className="flex shrink-0 justify-between p-4 border-b border-b-secondary">
      <RoomDisplay />
      <OnlineCounter />
    </div>
  );
};
