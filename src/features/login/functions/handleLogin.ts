import { authClient } from "@/lib/auth-client";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { RefObject } from "react";

export const handleLogin = async (
  email: string,
  password: string,
  keepLogin: string,
  router: AppRouterInstance,
  isSubmitting: RefObject<boolean>,
) => {
  const { data, error } = await authClient.signIn.email(
    {
      email,
      password,
      callbackURL: "/dashboard",
      rememberMe: keepLogin === "on",
    },
    {
      onRequest: (ctx) => {
        console.log("Loading");
      },
      onSuccess: (ctx) => {
        router.push("/dashboard");
      },
      onError: (ctx) => {
        alert(ctx.error.message);
        isSubmitting.current = false;
      },
    },
  );
};
