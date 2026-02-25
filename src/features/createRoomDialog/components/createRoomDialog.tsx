import { Button } from "@/components/ui/button";
import { DialogContent, DialogFooter } from "@/components/ui/dialog";
import { Header } from "./header";
import { useState } from "react";
import { GameRoomData } from "@/src/interfaces/gameRoomData";
import { RoomSettings } from "./roomSettings";
import { GameSettings } from "./gameSettings";

export const CreateRoomDialog = () => {
  const [gameRoomData, setGameRoomData] = useState<GameRoomData>({
    roomName: "",
    roomType: "open",
    password: "",
    gameMode: "speed",
    puzzleDifficulty: "easy",
  });

  const handleSubmit = () => {
    console.log("Test");
  };

  return (
    <DialogContent>
      <Header />
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
        <Button variant="outline">Close</Button>
        <Button onClick={handleSubmit}>Confirm</Button>
      </DialogFooter>
    </DialogContent>
  );
};
