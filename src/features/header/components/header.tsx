import { UserInfo } from "./userInfo";

interface Props {
  title: string;
}

export const Header = ({ title }: Props) => {
  return (
    <div className="flex items-center justify-between bg-primary w-full h-12 rounded-md px-4">
      <span>{title}</span>
      <UserInfo />
    </div>
  );
};
