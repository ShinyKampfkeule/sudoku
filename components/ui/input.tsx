import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-9 w-full min-w-0 px-3 py-1 ",
        "border border-secondary bg-transparent rounded-md text-base text-secondary shadow-xs transition-[color,box-shadow] outline-none ",
        "file:text-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium ",
        "placeholder:text-muted/50 selection:bg-accent selection:text-primary ",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm ",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-2 ",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive ",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
