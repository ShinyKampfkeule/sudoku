import { Button } from "@/components/ui/button";
import { DialogContent, DialogFooter } from "@/components/ui/dialog";
import { Header } from "./header";
import { Dispatch, SetStateAction, useState } from "react";
import { GameRoomData } from "@/src/interfaces/gameRoomData";
import { RoomSettings } from "./roomSettings";
import { GameSettings } from "./gameSettings";
import { socket } from "@/app/socket";

interface Props {
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
  dialogType: "createRoom" | "joinRoom" | "showRooms" | null;
}

export const CreateRoomDialog = ({ setOpenDialog, dialogType }: Props) => {
  const [gameRoomData, setGameRoomData] = useState<GameRoomData>({
    roomName: "",
    public: true,
    visible: true,
    password: "",
    gameMode: "speed",
    puzzleDifficulty: "easy",
  });

  const handleSubmit = async () => {
    const response = await fetch("/api/gameRooms/create", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(gameRoomData),
    });
    if (response.ok) {
      const roomData = await response.json();
      console.log(roomData);
      socket.emit("joinRoom", { room: roomData.room.id });
      setOpenDialog(false);
    }
  };

  if (dialogType !== "createRoom") return;

  return (
    <DialogContent>
      <Header
        title="Create Room"
        description="Create a new Game"
      />
      <div className="flex flex-col gap-8">
        <RoomSettings
          gameRoomData={gameRoomData}
          setGameRoomData={setGameRoomData}
        />
        <GameSettings
          gameRoomData={gameRoomData}
          setGameRoomData={setGameRoomData}
        />
      </div>
      <DialogFooter>
        <Button
          variant="outline"
          onClick={() => setOpenDialog(false)}
        >
          Close
        </Button>
        <Button onClick={handleSubmit}>Confirm</Button>
      </DialogFooter>
    </DialogContent>
  );
};
