import { ActiveRoomDataInterface } from "@/src/interfaces/activeRoomData";

interface Props {
  roomData: ActiveRoomDataInterface;
}

export const RoomOverview = ({ roomData }: Props) => {
  return (
    <div className="w-[calc(100%-21rem)] h-full bg-primary rounded-t-md p-4 flex flex-col gap-2">
      <div className="flex justify-center gap-16">
        <div className="flex w-35 flex-col gap-2 p-4 items-center border border-secondary rounded-md">
          <span className="">Game Mode</span>
          <span className="text-3xl">{roomData.gameMode}</span>
        </div>
        <div className="flex w-35 flex-col gap-2 p-4 items-center border border-secondary rounded-md">
          <span className="">Difficulty</span>
          <span className="text-3xl">{roomData.puzzleDifficulty}</span>
        </div>
      </div>
    </div>
  );
};
