import { ActiveRoomDataInterface } from "@/src/interfaces/activeRoomData";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { socket } from "@/app/socket";
import { BigUserIcon } from "./bigUserIcon";
import { authClient } from "@/lib/auth-client";
import { DisplayPlayerInformation } from "./displayPlayerInformation";

interface Props {
  roomData: ActiveRoomDataInterface;
  userIsHost: boolean;
}

export const RoomOverview = ({ roomData, userIsHost }: Props) => {
  const [opponentID, setOpponentID] = useState<string | undefined>(undefined);
  const { data } = authClient.useSession();
  const [userIsReady, setUserIsReady] = useState(false);
  const [opponentIsReady, setOpponentIsReady] = useState(false);

  console.log(userIsHost);

  useEffect(() => {
    socket.emit("joinRoom", roomData.id);

    const onUsersInRoom = async (usersInRoom: string[]) => {
      const opponentID = usersInRoom.filter(
        (user) => user !== data?.user.id,
      )[0];
      setOpponentID(opponentID);
    };

    const onRoomJoined = (room: string, user: string) => {
      if (room !== roomData.id) return;
      if (user === data?.user.id) {
        socket.emit("getListOfUsersInRoom", room);
        socket.on("sendListOfUsersInRoom", onUsersInRoom);
        return;
      }
      setOpponentID(user);
    };

    const onOpponentsReadyStatusUpdated = (isReady: boolean) => {
      setOpponentIsReady(isReady);
    };

    socket.on("roomJoined", onRoomJoined);
    socket.on("opponentsReadyStatus", onOpponentsReadyStatusUpdated);

    return () => {
      socket.off("roomJoined", onRoomJoined);
      socket.off("sendListOfUsersInRoom", onUsersInRoom);
      socket.off("opponentsReadyStatus", onOpponentsReadyStatusUpdated);
    };
  }, [roomData, data]);

  return (
    <div className="relative overflow-hidden flex flex-col items-center justify-between w-[calc(100%-21rem)] h-full bg-primary rounded-t-md p-16 gap-32">
      <BigUserIcon userID={data?.user.id} />
      <BigUserIcon
        userID={opponentID}
        inverted
      />
      <div className="flex justify-center gap-16 z-1">
        <div className="flex w-35 flex-col gap-2 p-4 items-center border border-secondary rounded-md">
          <span className="">Game Mode</span>
          <span className="text-3xl">{roomData.gameMode}</span>
        </div>
        <div className="flex w-35 flex-col gap-2 p-4 items-center border border-secondary rounded-md">
          <span className="">Difficulty</span>
          <span className="text-3xl">{roomData.puzzleDifficulty}</span>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-16 z-1">
        <span className="text-7xl z-1">0:0</span>
        <div className="flex justify-center items-center gap-16">
          <DisplayPlayerInformation
            playerID={data?.user.id}
            playerIsReady={userIsReady}
            setPlayerIsReady={setUserIsReady}
            roomData={roomData}
          />
          <DisplayPlayerInformation
            playerID={opponentID}
            playerIsReady={opponentIsReady}
            setPlayerIsReady={setOpponentIsReady}
            roomData={roomData}
            isOpponent
          />
        </div>
        <div className="w-50">
          {userIsHost && (
            <Button
              className="w-48 h-12"
              disabled={!userIsReady || !opponentIsReady}
            >
              Start Game
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
