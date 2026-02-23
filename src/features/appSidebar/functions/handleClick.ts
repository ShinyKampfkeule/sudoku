import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { logout } from "./logout";

export const handleClick = (eventName: string, router: AppRouterInstance) => {
  switch (eventName) {
    case "Logout":
      logout(router);
      break;
  }
};
