import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";

export const MessageInput = () => {
  return (
    <ScrollArea className="w-55 max-w-55 h-18">
      <Textarea
        name="message"
        className="max-w-55 resize-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      />
    </ScrollArea>
  );
};
