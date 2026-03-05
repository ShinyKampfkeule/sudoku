import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { logout } from "./logout";

export const handleClick = (eventName: string, router: AppRouterInstance) => {
  switch (eventName) {
    case "Dashboard":
      router.push("/dashboard");
    case "Logout":
      logout(router);
      break;
  }
};
