import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

export const SendBtn = () => {
  return (
    <Button
      type="submit"
      variant="sendMessage"
      className="w-8 h-8"
    >
      <Send />
    </Button>
  );
};
