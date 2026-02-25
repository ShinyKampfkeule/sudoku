import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
import { Earth, KeyRound, Users } from "lucide-react";
import { CreateRoomDialog } from "../../createRoomDialog/components/createRoomDialog";

export const GameButtons = () => {
  return (
    <div className="flex gap-4 shrink-0">
      <Button className="w-[calc((100%-2rem)/3)] h-20 bg-accent hover:bg-accent/70">
        <Users />
        Create Room
      </Button>
      <Button className="w-[calc((100%-2rem)/3)] h-20 bg-orange-400 hover:bg-orange-400/70">
        <KeyRound />
        Join with Code
      </Button>
      <Button className="w-[calc((100%-2rem)/3)] h-20 bg-blue-400 hover:bg-blue-400/70">
        <Earth />
        Join Random Room
      </Button>
      {/* MVP: Room Name, Password, Game Mode, Puzzle Level */}
      {/* Later: Game Settings, Friend Invite, more Game Modes,  */}
      <Dialog open>
        <CreateRoomDialog />
      </Dialog>
    </div>
  );
};
