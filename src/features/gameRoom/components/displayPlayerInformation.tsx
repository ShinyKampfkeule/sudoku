import { UserDataInterface } from "@/src/interfaces/userDataInterface";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { DisplayIcon } from "./displayIcon";
import { DPIPlaceholderText } from "./dpiPlaceholderText";
import { DPIPlayerInformation } from "./dpiPlayerInformation";
import { DPIReadyInteraction } from "./dpiReadyInteraction";
import { Dispatch, SetStateAction } from "react";
import { ActiveRoomDataInterface } from "@/src/interfaces/activeRoomData";

interface Props {
  playerID: string | undefined;
  playerIsReady: boolean;
  setPlayerIsReady: Dispatch<SetStateAction<boolean>>;
  roomData: ActiveRoomDataInterface;
  isOpponent?: boolean;
}

export const DisplayPlayerInformation = ({
  playerID,
  playerIsReady,
  setPlayerIsReady,
  roomData,
  isOpponent = false,
}: Props) => {
  const { data }: UseQueryResult<UserDataInterface | undefined> = useQuery({
    queryKey: ["user", playerID],
    queryFn: async () => {
      if (!playerID) return null;

      const res = await fetch(`/api/user/${playerID}`);
      return res.json();
    },
    enabled: !!playerID,
  });

  return (
    <div className="flex flex-col justify-center items-center w-fit gap-0">
      <DisplayIcon
        name={data ? data.user.name : "Placeholder"}
        isOpponent={isOpponent}
      />
      <div className="flex flex-col w-55 h-17 py-2 justify-center items-center bg-secondary rounded-md text-primary">
        {!data ? (
          <DPIPlaceholderText opponent={isOpponent} />
        ) : (
          <DPIPlayerInformation
            name={data.user.name}
            level={data.user.level}
          />
        )}
      </div>
      <DPIReadyInteraction
        isOpponent={isOpponent}
        playerIsReady={playerIsReady}
        setPlayerIsReady={setPlayerIsReady}
        roomData={roomData}
      />
    </div>
  );
};
