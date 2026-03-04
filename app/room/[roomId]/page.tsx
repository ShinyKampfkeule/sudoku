import { GameRoomContainer } from "@/src/features/gameRoom/components/gameRoomContainer";

export default async function Room({
  params,
}: {
  params: Promise<{ roomId: string }>;
}) {
  const { roomId } = await params;

  return (
    <div className="w-screen h-screen flex flex-col px-4 pt-4 gap-32">
      <GameRoomContainer roomId={roomId} />
    </div>
  );
}
