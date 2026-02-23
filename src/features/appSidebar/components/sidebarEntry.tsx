"use client";

import { usePathname, useRouter } from "next/navigation";
import { ReactNode } from "react";
import { handleClick } from "../functions/handleClick";

interface Props {
  icon: ReactNode;
  label: string;
}

export const SidebarEntry = ({ icon, label }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div
      className={`flex px-4 py-2 gap-2 cursor-pointer rounded-r-md ${pathname.includes(label.toLowerCase()) ? "bg-secondary text-primary" : "hover:bg-secondary/10"}`}
      onClick={() => handleClick(label, router)}
    >
      {icon}
      <span>{label}</span>
    </div>
  );
};
