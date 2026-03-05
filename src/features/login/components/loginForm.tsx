"use client";

import { CredentialsInputs } from "./credentialsInputs";
import { ConfirmAndType } from "./confirmAndType";
import { useAuthForm } from "../hooks/useAuthForm";

export const LoginForm = () => {
  const { createMode, setCreateMode, handleSubmit } = useAuthForm();

  return (
    <form
      className="flex flex-col items-center justify-center gap-8 text-white"
      onSubmit={handleSubmit}
    >
      <h1 className="text-5xl text-secondary mb-16">Sudokuell</h1>
      <CredentialsInputs createMode={createMode} />
      <ConfirmAndType
        setCreateMode={setCreateMode}
        createMode={createMode}
      />
    </form>
  );
};
