import { UserInfo } from "./userInfo";

export const Header = () => {
  return (
    <div className="flex items-center justify-between bg-primary w-full h-12 rounded-md px-4">
      <span>Dashboard</span>
      <UserInfo />
    </div>
  );
};
