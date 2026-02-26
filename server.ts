import { createServer } from "node:http";
import next from "next";
import { Server } from "socket.io";
import { randomUUID } from "node:crypto";

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = 3000;
const app = next({ dev, hostname, port });
const handler = app.getRequestHandler();
const sessions = new Map<string, { userID: string; username: string }>();

app.prepare().then(() => {
  const httpServer = createServer(handler);
  const io = new Server(httpServer);

  io.use((socket, next) => {
    const sessionID = socket.handshake.auth.sessionID;

    if (sessionID) {
      const session = sessions.get(sessionID);

      if (session) {
        socket.sessionID = sessionID;
        socket.userID = session.userID;
        socket.username = session.username;
        return next();
      }
    }

    const username = socket.handshake.auth.username;
    const userID = socket.handshake.auth.userID;

    if (!username) {
      return next(new Error("invalid username"));
    }

    const newSessionID = randomUUID();

    socket.sessionID = newSessionID;
    socket.userID = userID;
    socket.username = username;

    sessions.set(newSessionID, { userID, username });

    next();
  });

  io.on("connection", (socket) => {
    socket.emit("session", {
      sessionID: socket.sessionID,
      userID: socket.userID,
    });

    socket.broadcast.emit("userConnected", {
      userID: socket.id,
      username: socket.username,
    });

    socket.join("Lobby");

    socket.on("activeField", (activeField: number) => {
      socket.broadcast.emit("activeField", activeField);
    });

    socket.on("numberInput", (data: { field: number; added: boolean }) => {
      socket.broadcast.emit("numberInput", data);
    });

    socket.on("createGame", () => {
      socket.join("test");
      socket.emit("gameCreated", { room: "test" });
    });

    socket.on("joinRoom", (data: { room: string }) => {
      console.log("Room ID: " + data.room);
      socket.join(data.room);
      socket.emit("roomJoined", { room: data.room });
    });

    socket.on("getUsers", (data: { user: string }) => {
      const users = [];

      for (const [id, socket] of io.of("/").sockets) {
        if (socket.userID !== data.user) {
          users.push({
            userID: id,
            username: socket.username,
          });
        }
      }

      socket.emit("users", users);
    });

    socket.on("sendMessage", (data: { message: string }) => {
      io.to("Lobby").emit("receiveMessage", {
        sender: socket.username,
        message: data.message,
        timestamp: Date.now(),
      });
    });

    socket.on("getUsersInRoom", (data: { room: string }) => {
      let size = 0;

      console.log(data.room);
      const room = io.sockets.adapter.rooms.get(data.room);
      console.log(room);
      if (room) size = room.size;

      socket.emit("usersInRoom", size);
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
