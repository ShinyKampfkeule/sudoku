import { useEffect, useState } from "react";
import { DisplayIcon } from "./displayIcon";
import { DisplayPlayerInformation } from "./displayPlayerInformation";

interface Props {
  opponentID: string | null;
}

export const OpponentDisplay = ({ opponentID }: Props) => {
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    (async () => {
      if (!opponentID) return;
      const res = await fetch(`/api/user/${opponentID}`);
      if (res.ok) {
        const json = await res.json();
        setProfile(json.user);
      }
    })();
  }, [opponentID]);

  return (
    <div className="flex flex-col justify-center items-center w-fit gap-0">
      <DisplayIcon
        name={profile ? profile.name : "Placeholder"}
        inverted
      />
      <DisplayPlayerInformation profile={profile} />
      <div className="h-9 mt-2">
        <span>Not Ready</span>
      </div>
    </div>
  );
};
