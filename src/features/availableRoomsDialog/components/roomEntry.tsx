import { socket } from "@/app/socket";
import { AvailableRoomDataInterface } from "@/src/interfaces/availableRoomData";
import { LockKeyhole } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Props {
  room: AvailableRoomDataInterface;
}

export const RoomEntry = ({ room }: Props) => {
  const [usersInRoom, setUsersInRoom] = useState<number>(0);
  const router = useRouter();

  useEffect(() => {
    const handleUsersInRoom = (size: number) => {
      setUsersInRoom(size);
    };
    socket.on("usersInRoom", handleUsersInRoom);

    socket.emit("getUsersInRoom", room.id);

    return () => {
      socket.off("usersInRoom", handleUsersInRoom);
    };
  }, [room]);

  const joinRoom = () => {
    router.push(`/room/${room.id}`);
  };

  return (
    <div
      className="flex gap-2 cursor-pointer hover:bg-background/30 p-2 rounded-md"
      onClick={joinRoom}
    >
      <span>{room.name}</span>
      <span>{room.gameMode}</span>
      <span>{room.puzzleDifficulty}</span>
      {!room.public && <LockKeyhole />}
      {usersInRoom}
    </div>
  );
};
