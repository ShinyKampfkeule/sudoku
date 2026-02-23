import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { Dispatch, FormEvent, RefObject, SetStateAction } from "react";
import { handleSignUp } from "./handleSignUp";
import { handleLogin } from "./handleLogin";

export const handleUserAuthentication = async (
  event: FormEvent<HTMLFormElement>,
  isSubmitting: RefObject<boolean>,
  createMode: boolean,
  setCreateMode: Dispatch<SetStateAction<boolean>>,
  router: AppRouterInstance,
) => {
  event.preventDefault();

  if (isSubmitting.current) return;
  isSubmitting.current = true;

  const data = new FormData(event.currentTarget);
  const name = data.get("name") as string;
  const email = data.get("email") as string;
  const password = data.get("password") as string;
  const keepLogin = data.get("keepLogin") as string;

  if (createMode) {
    handleSignUp(email, password, name, setCreateMode, isSubmitting);
  } else {
    handleLogin(email, password, keepLogin, router, isSubmitting);
  }
};
