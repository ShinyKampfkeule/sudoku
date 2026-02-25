export interface GameRoomData {
  roomName: string;
  roomType: "open" | "private";
  password: string;
  gameMode: "speed" | "points" | "bestOf";
  puzzleDifficulty: "easy" | "medium" | "hard";
}
