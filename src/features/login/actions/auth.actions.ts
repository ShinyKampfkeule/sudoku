import { authClient } from "@/lib/auth-client";

export const signUpAction = async (
  email: string,
  password: string,
  name: string,
) => {
  const { data, error } = await authClient.signUp.email({
    email,
    password,
    name,
    callbackURL: "/dashboard",
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const loginAction = async (
  email: string,
  password: string,
  rememberMe: boolean,
) => {
  const { data, error } = await authClient.signIn.email({
    email,
    password,
    rememberMe,
    callbackURL: "/dashboard",
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
