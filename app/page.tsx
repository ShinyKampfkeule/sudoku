import { Header } from "@/src/features/header/components/header";

export default function Dashboard() {
  return (
    <div className="grow flex flex-col px-4 pt-4 gap-32">
      <Header />
      <div className="grow flex gap-4">
        <div className="bg-primary grow rounded-t-md"></div>
        <div className="bg-primary w-80 rounded-t-md"></div>
      </div>
    </div>
  );
}
