import { AvailableRoomDataInterface } from "@/src/interfaces/availableRoomData";
import { Dispatch, SetStateAction } from "react";

export const getAvailableRooms = async (
  setRooms: Dispatch<SetStateAction<AvailableRoomDataInterface[]>>,
) => {
  const res = await fetch("/api/gameRooms/getAllVisible");
  if (res.ok) {
    const json = (await res.json()) as {
      visibleRooms: AvailableRoomDataInterface[];
    };
    console.log(json);
    setRooms(json.visibleRooms);
  }
};
