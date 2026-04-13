export interface ServerToClientEvents {
  session: (sessionID: string) => void;
  userConnected: (userID: string, username: string) => void;
  activeField: (activeField: number) => void;
  numberInput: (field: number, added: boolean) => void;
  roomJoined: (room: string, user: string) => void;
  usersInRoom: (size: number) => void;
  users: (
    users: {
      userID: string;
      username: string;
    }[],
  ) => void;
  receiveMessage: (sender: string, message: string, timestamp: number) => void;
  sendListOfUsersInRoom: (usersInRoom: string[]) => void;
  opponentsReadyStatus: (isReady: boolean) => void;
}
