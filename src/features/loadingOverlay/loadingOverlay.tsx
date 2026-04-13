"use client";

import { socket } from "@/app/socket";
import { authClient } from "@/lib/auth-client";
import { onSession } from "@/src/functions/onSession";
import { useEffect } from "react";

export const LoadingOverlay = () => {
  const { data, isPending } = authClient.useSession();

  useEffect(() => {
    if (!isPending && data) {
      const sessionID = localStorage.getItem("sessionID");
      if (sessionID) {
        socket.auth = { sessionID };
        socket.connect();
        socket.emit("joinRoom", "lobby");
      }

      socket.on("session", onSession);

      socket.auth = { username: data.user.name, userID: data.user.id };
      socket.connect();
      socket.emit("joinRoom", "lobby");

      return () => {
        socket.off("session", onSession);
      };
    }
  }, [data, isPending]);

  return (
    isPending && (
      <div className="absolute top-0 left-0 w-screen h-screen bg-background z-5000 flex justify-center items-center">
        <span className="text-8xl">Sudokuell</span>
      </div>
    )
  );
};
