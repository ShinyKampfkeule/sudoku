import { ScrollArea } from "@/components/ui/scroll-area";
import { GameButtons } from "./gameButtons";

export const DashboardContainer = () => {
  return (
    <ScrollArea className="w-[calc(100%-21rem)] h-full bg-primary rounded-t-md p-4 text-secondary-foreground">
      <div className="flex flex-col gap-4 min-h-full">
        <div className="flex justify-center items-center w-full h-36 bg-secondary rounded-md shrink-0">
          <span className="text-6xl">Raid Shadow Legends</span>
        </div>
        <GameButtons />
        <div className="flex flex-1 min-h-65 gap-4">
          <div className="flex-1 bg-secondary rounded-md p-4">Friends</div>
          <div className="flex-1 bg-secondary rounded-md p-4">Games</div>
        </div>
        <div className="grow flex-1 min-h-56 bg-secondary rounded-md p-4">
          Messages
        </div>
      </div>
    </ScrollArea>
  );
};
