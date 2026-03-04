import { BasicRoomDataInterface } from "./basicRoomData";

export interface AvailableRoomDataInterface extends BasicRoomDataInterface {
  id: string;
  public: boolean;
}
