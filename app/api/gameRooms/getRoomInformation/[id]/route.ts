import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  if (!id) return NextResponse.json({ error: "Not found" }, { status: 404 });

  const room = await prisma.gameRooms.findUnique({
    where: { id },
    select: {
      id: true,
      gameMode: true,
      name: true,
      puzzleDifficulty: true,
    },
  });

  if (!room) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ room });
}
