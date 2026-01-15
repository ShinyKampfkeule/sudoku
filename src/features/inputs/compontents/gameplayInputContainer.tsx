import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface Props {
  disabled: boolean;
  clickFunction?: () => void;
  icon: ReactNode;
  label: string;
}

export const GameplayInputContainer = ({
  disabled,
  clickFunction,
  icon,
  label,
}: Props) => {
  return (
    <div className="flex flex-col items-center">
      <Button
        size="basic"
        variant="gameplayInput"
        onClick={clickFunction}
        disabled={disabled}
      >
        {icon}
      </Button>
      <span className="text-white text-lg first-letter:underline">{label}</span>
    </div>
  );
};
