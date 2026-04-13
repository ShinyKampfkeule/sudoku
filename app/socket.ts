"use client";

import type { ClientToServerEvents } from "@/src/interfaces/clientToServerEvents";
import type { ServerToClientEvents } from "@/src/interfaces/serverToClientEvents";
import { io, Socket } from "socket.io-client";

const URL = "http://localhost:3000";
export const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(
  URL,
  { autoConnect: false },
);

socket.onAny((event, ...args) => {
  console.log(event, args);
});
