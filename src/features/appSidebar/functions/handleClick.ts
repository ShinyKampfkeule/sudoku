import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { logout } from "./logout";
import { socket } from "@/app/socket";

export const handleClick = (
  eventName: string,
  router: AppRouterInstance,
  pathname: string,
) => {
  const pathParts = pathname.split("/").filter((pathPart) => pathPart !== "");

  switch (eventName) {
    case "Dashboard":
      if (pathParts[0] === "room") socket.emit("leaveRoom", pathParts[1]);
      router.push("/dashboard");
      break;
    case "Logout":
      logout(router);
      break;
  }
};
