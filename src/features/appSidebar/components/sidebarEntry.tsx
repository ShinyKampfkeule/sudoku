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
  const pathIncludesLabel = pathname.includes(label.toLowerCase());

  return (
    <div
      className={`relative group flex px-4 py-2 gap-2 cursor-pointer rounded-r-md ${pathIncludesLabel ? "bg-secondary text-primary" : label === "Logout" ? "text-red-400" : ""}`}
      onClick={() => handleClick(label, router)}
    >
      {!pathIncludesLabel && (
        <div
          className={`absolute left-0 top-0 w-1 h-full group-hover:w-full rounded-r-md transition-all duration-200 ease-in-out ${label === "Logout" ? "bg-red-400 text-red-400 group-hover:bg-red-400/10" : "bg-secondary group-hover:bg-secondary/10"}`}
        ></div>
      )}
      {icon}
      <span>{label}</span>
    </div>
  );
};
