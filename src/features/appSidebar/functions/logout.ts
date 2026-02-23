import { authClient } from "@/lib/auth-client";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const logout = async (router: AppRouterInstance) => {
  await authClient.signOut({
    fetchOptions: {
      onSuccess: () => {
        router.push("/");
      },
    },
  });
};
