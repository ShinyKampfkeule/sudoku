import { AppSidebar } from "@/src/features/appSidebar/components/appSidebar";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <AppSidebar />
      {children}
    </>
  );
}
