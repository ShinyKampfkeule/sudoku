export interface GameRoomData {
  roomName: string;
  public: boolean;
  visible: boolean;
  password: string;
  gameMode: "speed" | "points" | "bestOf";
  puzzleDifficulty: "easy" | "medium" | "hard";
}
