"use client";

import { Header } from "@/src/features/header/components/header";
import { useEffect, useState } from "react";
import { socket } from "../socket";
import { ChatArea } from "@/src/features/chatArea/components/chatArea";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { LoadingOverlay } from "@/src/features/loadingOverlay/loadingOverlay";
import { onSession } from "@/src/functions/onSession";
import { DashboardContainer } from "@/src/features/dashboardContainer/components/dashboardContainer";

export default function Dashboard() {
  const [isConnected, setIsConnected] = useState(false);
  const [transport, setTransport] = useState("N/A");
  const [gameRoom, setGameRoom] = useState<string | null>(null);
  const [users, setUsers] = useState<{ userID: string; username: string }[]>(
    [],
  );
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  useEffect(() => {
    if (!isPending && !session) {
      router.push("/");
    } else if (session) {
      const sessionID = localStorage.getItem("sessionID");
      if (sessionID) {
        socket.auth = { sessionID };
        socket.connect();
      }

      socket.on("session", onSession);

      socket.auth = { username: session.user.name, userID: session.user.id };
      socket.connect();

      if (socket.connected) {
        onConnect();
      }
    }

    function onConnect() {
      setIsConnected(true);
      setTransport(socket.io.engine.transport.name);

      socket.io.engine.on("upgrade", (transport) => {
        setTransport(transport.name);
      });
    }

    function onDisconnect() {
      setIsConnected(false);
      setTransport("N/A");
    }

    const onGameCreated = (data: { room: string }) => {
      setGameRoom(data.room);
    };

    const onUsers = (users: { userID: string; username: string }[]) => {
      setUsers(users);
    };

    const onUserConnected = (data: { userID: string; username: string }) => {
      setUsers((prev) => [...prev, data]);
    };

    const onGameJoined = (data: { room: string }) => {
      setGameRoom(data.room);
    };

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("gameCreated", onGameCreated);
    socket.on("users", onUsers);
    socket.on("userConnected", onUserConnected);
    socket.on("gameJoined", onGameJoined);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("game created", onGameCreated);
      socket.off("users", onUsers);
      socket.off("userConnected", onUserConnected);
    };
  }, [isPending, router, session]);

  return (
    <div className="w-screen h-screen flex flex-col px-4 pt-4 gap-32">
      {isPending && <LoadingOverlay />}
      <Header />
      <div className="flex-1 min-h-0 flex gap-4">
        <DashboardContainer />
        <ChatArea />
      </div>
    </div>
  );
}
