import prisma from "@/lib/prisma";
import { CreateRoomDataInterface } from "@/src/interfaces/createRoomData";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const res = (await request.json()) as CreateRoomDataInterface;
  const room = await prisma.gameRooms.create({
    data: {
      name: res.name,
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
