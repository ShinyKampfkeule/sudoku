import { handleUserAuthentication } from "../functions/handleUserAuthentication";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { CredentialsInputs } from "./credentialsInputs";
import { ConfirmAndType } from "./confirmAndType";

export const LoginForm = () => {
  const isSubmitting = useRef(false);
  const [createMode, setCreateMode] = useState(false);
  const router = useRouter();

  return (
    <form
      className="flex flex-col items-center justify-center gap-8 text-white"
      onSubmit={(event) =>
        handleUserAuthentication(
          event,
          isSubmitting,
          createMode,
          setCreateMode,
          router,
        )
      }
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
