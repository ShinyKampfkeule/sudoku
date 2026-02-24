import { socket } from "@/app/socket";

export const onSession = (data: { sessionID: string; userID: string }) => {
  socket.auth = { sessionID: data.sessionID };
  localStorage.setItem("sessionID", data.sessionID);
  socket.userID = data.userID;
};
