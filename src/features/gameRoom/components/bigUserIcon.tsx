import { useEffect, useState } from "react";

interface Props {
  userID: string | undefined | null;
  inverted?: boolean;
}

export const BigUserIcon = ({ userID, inverted = false }: Props) => {
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    (async () => {
      if (!userID) return;
      const res = await fetch(`/api/user/${userID}`);
      if (res.ok) {
        const json = await res.json();
        setProfile(json.user);
      }
    })();
  }, [userID]);

  return (
    <img
      className={`absolute hidden lg:block lg:size-164 xl:size-180 2xl:size-196 opacity-30 blur-xs grayscale-50 ${inverted ? "-scale-x-100 lg:-right-90 xl:-right-100 2xl:-right-80 top-0 -rotate-20" : " lg:-left-90 xl:-left-100 2xl:-left-80 top-0 rotate-20"}`}
      src={`https://robohash.org/${profile ? profile.name : "Placeholder"}?set=set4`}
      alt="User Image"
    />
  );
};
