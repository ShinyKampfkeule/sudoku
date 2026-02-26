import prisma from "@/lib/prisma";
import { GameRoomData } from "@/src/interfaces/gameRoomData";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const res = (await request.json()) as GameRoomData;
  const room = await prisma.gameRooms.create({
    data: {
      name: res.roomName,
      public: res.public,
      visible: res.visible,
      password: res.password,
      gameMode: res.gameMode,
      puzzleDifficulty: res.puzzleDifficulty,
      active: true,
    },
  });
  return NextResponse.json({ room: room });
}
