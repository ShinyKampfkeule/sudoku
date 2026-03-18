import { socket } from "@/app/socket";
import { useEffect, useState } from "react";

export const OnlineCounter = () => {
  const [usersInRoom, setUsersInRoom] = useState<number>(0);

  useEffect(() => {
    socket.on("usersInRoom", (size: number) => {
      setUsersInRoom(size);
    });
  }, []);

  return (
    <div className="flex items-center gap-2.5">
      <div className="bg-green-800 w-2 h-2 rounded-full" />
      <span className="text-green-800">{usersInRoom}</span>
    </div>
  );
};
