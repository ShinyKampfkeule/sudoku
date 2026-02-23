import { Button } from "@/components/ui/button";
import { Dispatch, SetStateAction } from "react";

interface Props {
  setCreateMode: Dispatch<SetStateAction<boolean>>;
  createMode: boolean;
}

export const ConfirmAndType = ({ setCreateMode, createMode }: Props) => {
  return (
    <div className="flex flex-col gap-2 w-full justify-center items-center">
      <Button
        type="submit"
        className="w-full"
      >
        Confirm
      </Button>
      <Button
        variant="link"
        className="h-5 w-1/2"
        type="button"
        onClick={() => setCreateMode(!createMode)}
      >
        {createMode ? "Existing Player?" : "New Player?"}
      </Button>
    </div>
  );
};
