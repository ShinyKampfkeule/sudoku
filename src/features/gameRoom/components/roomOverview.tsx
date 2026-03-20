import { ActiveRoomDataInterface } from "@/src/interfaces/activeRoomData";
import { UserDisplay } from "./userDisplay";
import { Button } from "@/components/ui/button";
import { OpponentDisplay } from "./opponentDisplay";
import { useEffect, useState } from "react";
import { socket } from "@/app/socket";
import { BigUserIcon } from "./bigUserIcon";
import { authClient } from "@/lib/auth-client";

interface Props {
  roomData: ActiveRoomDataInterface;
}

export const RoomOverview = ({ roomData }: Props) => {
  const [opponentID, setOpponentID] = useState<string | null>(null);
  const { data: session } = authClient.useSession();
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const userId = session?.user.id;
      if (!userId) return;
      const res = await fetch(`/api/user/${userId}`);
      if (res.ok) {
        const json = await res.json();
        setProfile(json.user);
      }
    })();

    socket.emit("joinRoom", { room: roomData.id });

    socket.on("roomJoined", (data: { room: string; user: string }) => {
      alert("Joined");
      if (data.user === socket.userID) return;
      setOpponentID(data.user);
      alert(`User ${data.user} joined the Room!`);
    });

    // socket.on("");
  }, [roomData]);

  return (
    <div className="relative overflow-hidden flex flex-col items-center justify-between w-[calc(100%-21rem)] h-full bg-primary rounded-t-md p-16 gap-32">
      <BigUserIcon userID={session?.user.id} />
      <BigUserIcon
        userID={opponentID}
        inverted
      />
      <div className="flex justify-center gap-16 z-1">
        <div className="flex w-35 flex-col gap-2 p-4 items-center border border-secondary rounded-md">
          <span className="">Game Mode</span>
          <span className="text-3xl">{roomData.gameMode}</span>
        </div>
        <div className="flex w-35 flex-col gap-2 p-4 items-center border border-secondary rounded-md">
          <span className="">Difficulty</span>
          <span className="text-3xl">{roomData.puzzleDifficulty}</span>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-16 z-1">
        <span className="text-7xl z-1">0:0</span>
        <div className="flex justify-center items-center gap-16">
          <UserDisplay profile={profile} />
          <OpponentDisplay opponentID={opponentID} />
        </div>
        <Button className="w-48 h-12">Play</Button>
      </div>
    </div>
  );
};
