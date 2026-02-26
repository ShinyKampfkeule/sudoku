import { DialogContent, DialogFooter } from "@/components/ui/dialog";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Header } from "./header";
import { Button } from "@/components/ui/button";
import { RoomEntry } from "./roomEntry";
import { getAvailableRooms } from "../functions/getAvailableRooms";
import { RefreshCw } from "lucide-react";

interface Props {
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
  dialogType: "createRoom" | "joinRoom" | "showRooms" | null;
}

export const AvailableRoomsDialog = ({ setOpenDialog, dialogType }: Props) => {
  const [rooms, setRooms] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      await getAvailableRooms(setRooms);
    })();
  }, []);

  if (dialogType !== "showRooms") return;

  return (
    <DialogContent>
      <Header
        title="Available Rooms"
        description="Available Rooms to join"
      />
      <Button
        variant="ghost"
        size="icon-lg"
        onClick={() => getAvailableRooms(setRooms)}
      >
        <RefreshCw />
      </Button>
      <div className="flex flex-col gap-2">
        {rooms.map((room) => (
          <RoomEntry
            key={room.id}
            room={room}
          />
        ))}
      </div>
      <DialogFooter>
        <Button
          variant="outline"
          onClick={() => setOpenDialog(false)}
        >
          Close
        </Button>
        {/* <Button onClick={handleSubmit}>Confirm</Button> */}
      </DialogFooter>
    </DialogContent>
  );
};
