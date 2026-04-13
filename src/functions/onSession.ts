import { socket } from "@/app/socket";

export const onSession = (sessionID: string) => {
  socket.auth = { sessionID: sessionID };
  localStorage.setItem("sessionID", sessionID);
};
