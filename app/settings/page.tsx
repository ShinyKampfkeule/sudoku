"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Header } from "@/src/features/header/components/header";
import { useTheme } from "@/src/providers/theme-provider";
import { Theme } from "@/src/types/theme";

const themes: Theme[] = [
  "lightGreen",
  "darkGreen",
  "lightSand",
  "darkSand",
  "mixed",
];

export default function Settings() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="w-screen h-screen flex flex-col px-4 pt-4 gap-32">
      <Header title="Settings" />
      <ScrollArea className="w-full h-full bg-primary rounded-t-lg p-4">
        <div className="flex flex-col gap-4">
          <span className="text-2xl">Color Themes</span>
          <div className="flex flex-wrap gap-8 p-1">
            {themes.map((themeEntry) => (
              <div
                key={themeEntry}
                className={`flex flex-col gap-2 justify-center items-center p-2 rounded-lg hover:bg-background/50 cursor-pointer
                    ${theme === themeEntry ? " outline-2 outline-background" : ""}`}
                onClick={() => {
                  setTheme(themeEntry);
                }}
              >
                <div
                  className="w-32 h-32 flex flex-col gap-2 p-2 bg-background rounded-lg"
                  data-theme={themeEntry}
                >
                  <span className="text-foreground">Example Text</span>
                  <div className="w-full h-4 flex items-center pl-1 bg-primary rounded-sm text-primary-foreground">
                    ~~~~~~~~
                  </div>
                  <div className="w-full h-4 flex items-center pl-1 bg-secondary rounded-sm text-secondary-foreground">
                    ~~~~~~~~
                  </div>
                  <div className="w-full h-4 flex items-center pl-1 bg-accent rounded-sm text-accent-foreground">
                    ~~~~~~~~
                  </div>
                </div>
                <span className="text-gray-300">{themeEntry}</span>
              </div>
            ))}
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
