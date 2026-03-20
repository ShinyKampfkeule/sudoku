import { Header } from "@/src/features/header/components/header";
import { ChatArea } from "@/src/features/chatArea/components/chatArea";
import { LoadingOverlay } from "@/src/features/loadingOverlay/loadingOverlay";
import { DashboardContainer } from "@/src/features/dashboardContainer/components/dashboardContainer";

export default function Dashboard() {
  return (
    <div className="w-screen h-screen flex flex-col px-4 pt-4 gap-32">
      <LoadingOverlay />
      <Header title="Dashboard" />
      <div className="flex-1 min-h-0 flex gap-4">
        <DashboardContainer />
        <ChatArea initialRoomData={{ id: "lobby", name: "Lobby" }} />
      </div>
    </div>
  );
}
