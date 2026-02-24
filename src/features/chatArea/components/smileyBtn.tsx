import { Button } from "@/components/ui/button";
import { Smile } from "lucide-react";

export const SmileyBtn = () => {
  return (
    <Button
      variant="outline"
      className="w-8 h-8"
    >
      <Smile />
    </Button>
  );
};
