"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import { Theme } from "../types/theme";
import { Geist, Geist_Mono } from "next/font/google";

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("darkGreen");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen w-screen flex bg-background text-foreground`}
        data-theme={theme}
      >
        {children}
      </body>
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
