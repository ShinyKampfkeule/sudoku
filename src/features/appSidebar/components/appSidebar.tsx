import {
  Contact,
  Gamepad2,
  House,
  LogOut,
  Mail,
  Settings2,
} from "lucide-react";
import { SidebarEntry } from "./sidebarEntry";

export const AppSidebar = () => {
  return (
    <div className="flex flex-col w-50 h-full">
      <div className=" flex items-end px-4 py-2 text-2xl h-16">
        <span>Sudokuell</span>
      </div>
      <div className="grow pt-2">
        <SidebarEntry
          icon={<House />}
          label="Lobby"
        />
        <SidebarEntry
          icon={<Gamepad2 />}
          label="Games"
        />
        <SidebarEntry
          icon={<Contact />}
          label="Friends"
        />
        <SidebarEntry
          icon={<Mail />}
          label="Messages"
        />
      </div>
      <div className="pb-2">
        <SidebarEntry
          icon={<Settings2 />}
          label="Settings"
        />
        <SidebarEntry
          icon={<LogOut />}
          label="Logout"
        />
      </div>
    </div>
  );
};
