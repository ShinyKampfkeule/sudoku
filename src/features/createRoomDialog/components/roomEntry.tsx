import { socket } from "@/app/socket";
import { LockKeyhole } from "lucide-react";
import { useEffect, useState } from "react";

interface Props {
  room: any;
}

export const RoomEntry = ({ room }: Props) => {
  const [usersInRoom, setUsersInRoom] = useState<number>(0);

  useEffect(() => {
    socket.on("usersInRoom", (size: number) => {
      setUsersInRoom(size);
    });

    socket.emit("getUsersInRoom", {
      room: room.id,
    });
  }, [room]);

  return (
    <div className="flex gap-2">
      <span>{room.name}</span>
      <span>{room.gameMode}</span>
      <span>{room.puzzleDifficulty}</span>
      {!room.public && <LockKeyhole />}
      {usersInRoom}
    </div>
  );
};
