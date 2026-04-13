import type { Metadata } from "next";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/src/providers/theme-provider";
import { UserStoreProvider } from "@/src/providers/user-store-provider";
import { Providers } from "@/src/providers/providers";

export const metadata: Metadata = {
  title: "Sudokuell",
  description: "A multiplayer Sudoku Experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <UserStoreProvider>
          <TooltipProvider>
            <Providers>{children}</Providers>
          </TooltipProvider>
        </UserStoreProvider>
      </ThemeProvider>
    </html>
  );
}
