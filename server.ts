import { createServer } from "node:http";
import next from "next";
import { Server } from "socket.io";
import { randomUUID } from "node:crypto";
import type { SocketData } from "./src/interfaces/socketData";
import type { ServerToClientEvents } from "./src/interfaces/serverToClientEvents";
import type { ClientToServerEvents } from "./src/interfaces/clientToServerEvents";
import type { InterServerEvents } from "./src/interfaces/interServerEvents";

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = 3000;
const app = next({ dev, hostname, port });
const handler = app.getRequestHandler();
const sessions = new Map<string, { userID: string; username: string }>();

app.prepare().then(() => {
  const httpServer = createServer(handler);
  const io = new Server<
    ClientToServerEvents,
    ServerToClientEvents,
    InterServerEvents,
    SocketData
  >(httpServer);

  io.use((socket, next) => {
    const sessionID = socket.handshake.auth.sessionID;

    if (sessionID) {
      const session = sessions.get(sessionID);

      if (session) {
        socket.data.sessionID = sessionID;
        socket.data.userID = session.userID;
        socket.data.username = session.username;
        return next();
      }
    }

    const username = socket.handshake.auth.username;
    const userID = socket.handshake.auth.userID;

    if (!username) {
      return next(new Error("invalid username"));
    }

    const newSessionID = randomUUID();

    socket.data.sessionID = newSessionID;
    socket.data.userID = userID;
    socket.data.username = username;

    sessions.set(newSessionID, { userID, username });

    next();
  });

  io.on("connection", (socket) => {
    socket.join("lobby");

    // User and Session related Events

    socket.emit("session", socket.data.sessionID, socket.data.userID);

    socket.broadcast.emit("userConnected", socket.id, socket.data.username);

    socket.on("getUsers", (userID) => {
      const users = [];

      for (const [id, socket] of io.of("/").sockets) {
        if (socket.data.userID !== userID) {
          users.push({
            userID: id,
            username: socket.data.username,
          });
        }
      }

      socket.emit("users", users);
    });

    // Room related Events

    socket.on("joinRoom", (room) => {
      console.log(room);
      socket.join(room);
      io.to(room).emit("roomJoined", room, socket.data.userID);

      let size = 0;

      const roomData = io.sockets.adapter.rooms.get(room);
      if (roomData) size = roomData.size;

      io.in(room).emit("usersInRoom", size);
    });

    socket.on("getUsersInRoom", (room) => {
      let size = 0;

      const roomData = io.sockets.adapter.rooms.get(room);

      if (roomData) size = roomData.size;

      socket.emit("usersInRoom", size);
    });

    // Chat related Events

    socket.on("sendMessage", (message, roomID) => {
      io.to(roomID).emit(
        "receiveMessage",
        socket.data.username,
        message,
        Date.now(),
      );
    });

    // Game related Events

    socket.on("activeField", (activeField) => {
      socket.broadcast.emit("activeField", activeField);
    });

    socket.on("numberInput", (field, added) => {
      socket.broadcast.emit("numberInput", field, added);
    });
  });

  httpServer
    .once("error", (err) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    });
});
