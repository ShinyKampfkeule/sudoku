import { BasicRoomDataInterface } from "./basicRoomData";

export interface CreateRoomDataInterface extends BasicRoomDataInterface {
  public: boolean;
  visible: boolean;
  password: string;
}
