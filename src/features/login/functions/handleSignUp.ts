import { authClient } from "@/lib/auth-client";
import { Dispatch, RefObject, SetStateAction } from "react";

export const handleSignUp = async (
  email: string,
  password: string,
  name: string,
  setCreateMode: Dispatch<SetStateAction<boolean>>,
  isSubmitting: RefObject<boolean>,
) => {
  const { data, error } = await authClient.signUp.email(
    {
      email,
      password,
      name,
      callbackURL: "/dashboard",
    },
    {
      onRequest: (ctx) => {
        console.log("Loading");
      },
      onSuccess: (ctx) => {
        setCreateMode(false);
        alert(
          "Created Account successfully! Please sign in with your credentials.",
        );
      },
      onError: (ctx) => {
        alert(ctx.error.message);
        isSubmitting.current = false;
      },
    },
  );
};
