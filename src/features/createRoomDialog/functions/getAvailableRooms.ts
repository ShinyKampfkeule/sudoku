import { Dispatch, SetStateAction } from "react";

export const getAvailableRooms = async (
  setRooms: Dispatch<SetStateAction<any[]>>,
) => {
  const res = await fetch("/api/gameRooms/getAllVisible");
  if (res.ok) {
    const json = await res.json();
    setRooms(json.visibleRooms);
  }
};
