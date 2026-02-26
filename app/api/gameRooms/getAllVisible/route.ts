import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(_req: Request) {
  const visibleRooms = await prisma.gameRooms.findMany({
    where: { visible: true, active: true },
    select: {
      id: true,
      gameMode: true,
      name: true,
      public: true,
      puzzleDifficulty: true,
    },
  });

  return NextResponse.json({ visibleRooms });
}
