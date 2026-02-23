"use client";

import { Header } from "@/src/features/header/components/header";
import { useEffect, useState } from "react";
import { socket } from "../socket";

export default function Dashboard() {
  const [isConnected, setIsConnected] = useState(false);
  const [transport, setTransport] = useState("N/A");
  const [gameRoom, setGameRoom] = useState<string | null>(null);
  const [users, setUsers] = useState<{ userID: string; username: string }[]>(
    [],
  );

  // const sessionID = localStorage.getItem("sessionID");
  // console.log(sessionID);

  // const onSession = (data: { sessionID: string; userID: string }) => {
  //   socket.auth = { sessionID: data.sessionID };
  //   localStorage.setItem("sessionID", data.sessionID);
  //   socket.userID = userID;
  // };

  // socket.on("session", onSession);

  // socket.auth = { username };
  // socket.connect();
  // router.push("/dashboard");

  useEffect(() => {
    const sessionID = localStorage.getItem("sessionID");

    if (sessionID) {
      socket.auth = { sessionID };
      socket.connect();
    }

    if (socket.connected) {
      onConnect();

      socket.emit("getUsers", { user: socket.id });
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
  }, []);

  return (
    <div className="grow flex flex-col px-4 pt-4 gap-32">
      <Header />
      <div className="grow flex gap-4">
        <div className="bg-primary grow rounded-t-md"></div>
        <div className="bg-primary w-80 rounded-t-md"></div>
      </div>
    </div>
  );
}
