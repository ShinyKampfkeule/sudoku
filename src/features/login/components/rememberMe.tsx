import { Field, FieldLabel } from "@/components/ui/field";
import { Switch } from "@/components/ui/switch";

export const RememberMe = () => {
  return (
    <Field orientation="horizontal">
      <Switch
        id="keepLogin"
        name="keepLogin"
      />
      <FieldLabel>Remember me</FieldLabel>
    </Field>
  );
};
