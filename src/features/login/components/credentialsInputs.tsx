import { Input } from "@/components/ui/input";
import { RememberMe } from "./rememberMe";

interface Props {
  createMode: boolean;
}

export const CredentialsInputs = ({ createMode }: Props) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      {createMode && (
        <Input
          placeholder="Username"
          name="name"
        />
      )}
      <Input
        placeholder="Email"
        name="email"
      />
      <Input
        placeholder="Password"
        name="password"
        type="password"
      />
      <RememberMe />
    </div>
  );
};
