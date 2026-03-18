import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useEffect, useState } from "react";
import { DisplayIcon } from "./displayIcon";
import { DisplayPlayerInformation } from "./displayPlayerInformation";

export const UserDisplay = () => {
  const { data: session } = authClient.useSession();
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const userId = session?.user.id;
      if (!userId) return;
      const res = await fetch(`/api/user/${userId}`);
      if (res.ok) {
        const json = await res.json();
        setProfile(json.user);
      }
    })();
  }, [session]);

  if (!session) return <span>Loading...</span>;

  return (
    <div className="flex flex-col justify-center items-center w-fit gap-0">
      <DisplayIcon name={profile ? profile.name : "Placeholder"} />
      <DisplayPlayerInformation profile={profile} />
      <Button className="mt-2">Ready</Button>
    </div>
  );
};
