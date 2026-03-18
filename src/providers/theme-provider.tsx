"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import { Theme } from "../types/theme";

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("darkGreen");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        className="h-screen w-screen flex bg-background text-foreground"
        data-theme={theme}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }
  return context;
};
