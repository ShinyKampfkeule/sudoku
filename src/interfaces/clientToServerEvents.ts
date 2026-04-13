export interface ClientToServerEvents {
  activeField: (activeField: number) => void;
  numberInput: (field: number, added: boolean) => void;
  createGame: () => void;
  joinRoom: (room: string) => void;
  leaveRoom: (room: string) => void;
  getUsers: (userID: string) => void;
  sendMessage: (message: string, roomID: string) => void;
  getUsersInRoom: (room: string) => void;
  getListOfUsersInRoom: (room: string) => void;
  playersReadyStatus: (roomID: string, isReady: boolean) => void;
}
