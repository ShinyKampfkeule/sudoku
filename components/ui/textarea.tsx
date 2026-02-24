import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex field-sizing-content min-h-16 w-full pr-2.5 resize-none ",
        "rounded-md bg-transparent text-base shadow-xs transition-[color,box-shadow] outline-none md:text-sm ",
        "disabled:cursor-not-allowed disabled:opacity-50 ",
        "placeholder:text-muted-foreground ",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive ",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
