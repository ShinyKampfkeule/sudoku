"use client";

import { CredentialsInputs } from "./credentialsInputs";
import { ConfirmAndType } from "./confirmAndType";
import { useAuthForm } from "../hooks/useAuthForm";

export const LoginForm = () => {
  const { createMode, setCreateMode, handleSubmit } = useAuthForm();

  return (
    <form
      className="flex flex-col items-center justify-center gap-8 min-w-116 min-h-150 rounded-lg z-1 bg-background/20 p-16 backdrop-blur-lg shadow-xl"
      onSubmit={handleSubmit}
    >
      <h1 className="text-5xl text-foreground mb-16">Sudokuell</h1>
      <CredentialsInputs createMode={createMode} />
      <ConfirmAndType
        setCreateMode={setCreateMode}
        createMode={createMode}
      />
    </form>
  );
};
