import { authClient } from "@/lib/auth-client";
import { useEffect, useState } from "react";

export const UserInfo = () => {
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

  return (
    <div className="h-full flex items-center justify-center gap-2">
      <div className="flex flex-col items-end justify-center gap-0">
        <span className="text-sm">{session ? session.user.name : ""}</span>
        <span className="text-xs">Level: {profile ? profile.level : ""}</span>
      </div>
      <div className="flex justify-center items-center w-8 h-8 rounded-md text-primary">
        <img
          src={`https://robohash.org/${session ? session.user.name : "placeholder"}?set=set4`}
          alt="User Image"
        />
      </div>
    </div>
  );
};
