import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  label: string;
}

export const SidebarEntry = ({ icon, label }: Props) => {
  return (
    <div className="flex px-4 py-2 gap-2 cursor-pointer hover:bg-secondary/10">
      {icon}
      <span>{label}</span>
    </div>
  );
};
