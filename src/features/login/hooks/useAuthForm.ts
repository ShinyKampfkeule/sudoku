import { useRouter } from "next/navigation";
import { FormEvent, useRef, useState } from "react";
import { loginAction, signUpAction } from "../actions/auth.actions";

export const useAuthForm = () => {
  const [createMode, setCreateMode] = useState(false);
  const isSubmitting = useRef(false);
  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitting.current) return;
    isSubmitting.current = true;

    const data = new FormData(event.currentTarget);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const password = data.get("password") as string;

    try {
      if (createMode) {
        await signUpAction(email, password, name);
        setCreateMode(false);
        alert(
          "Created Account successfully! Please sign in with your credentials.",
        );
      } else {
        const rememberMe = data.get("rememberMe") === "on";
        await loginAction(email, password, rememberMe);
        router.push("/dashboard");
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("An unknown error occurred");
      }
    } finally {
      isSubmitting.current = false;
    }
  };

  return {
    createMode,
    setCreateMode,
    handleSubmit,
  };
};
