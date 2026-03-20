import { Button } from "@/components/ui/button";
import { DisplayIcon } from "./displayIcon";
import { DisplayPlayerInformation } from "./displayPlayerInformation";

interface Props {
  profile: any;
}

export const UserDisplay = ({ profile }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center w-fit gap-0">
      <DisplayIcon name={profile ? profile.name : "Placeholder"} />
      <DisplayPlayerInformation profile={profile} />
      <Button className="mt-2">Ready</Button>
    </div>
  );
};
