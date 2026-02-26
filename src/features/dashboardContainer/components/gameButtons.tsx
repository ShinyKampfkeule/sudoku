import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
import { Earth, KeyRound, Users } from "lucide-react";
import { CreateRoomDialog } from "../../createRoomDialog/components/createRoomDialog";
import { useState } from "react";
import { AvailableRoomsDialog } from "../../createRoomDialog/components/availableRoomsDialog";

export const GameButtons = () => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [dialogType, setDialogType] = useState<
    "createRoom" | "joinRoom" | "showRooms" | null
  >(null);

  const handleOpenDialog = (type: "createRoom" | "joinRoom" | "showRooms") => {
    setDialogType(type);
    setOpenDialog(true);
  };

  return (
    <div className="flex gap-4 shrink-0">
      <Button
        className="w-[calc((100%-2rem)/3)] h-20 bg-accent hover:bg-accent/70"
        onClick={() => handleOpenDialog("createRoom")}
      >
        <Users />
        Create Room
      </Button>
      <Button
        className="w-[calc((100%-2rem)/3)] h-20 bg-orange-400 hover:bg-orange-400/70"
        onClick={() => handleOpenDialog("joinRoom")}
      >
        <KeyRound />
        Join Room with Code
      </Button>
      <Button
        className="w-[calc((100%-2rem)/3)] h-20 bg-blue-400 hover:bg-blue-400/70"
        onClick={() => handleOpenDialog("showRooms")}
      >
        <Earth />
        Show Available Rooms
      </Button>
      {/* MVP: Room Name, Password, Game Mode, Puzzle Level */}
      {/* Later: Game Settings, Friend Invite, more Game Modes,  */}
      <Dialog open={openDialog}>
        <CreateRoomDialog
          setOpenDialog={setOpenDialog}
          dialogType={dialogType}
        />
        <AvailableRoomsDialog
          setOpenDialog={setOpenDialog}
          dialogType={dialogType}
        />
      </Dialog>
    </div>
  );
};
