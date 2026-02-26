-- CreateTable
CREATE TABLE "gameRooms" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "open" BOOLEAN NOT NULL,
    "password" TEXT NOT NULL,
    "gameMode" TEXT NOT NULL,
    "puzzleDifficulty" TEXT NOT NULL,

    CONSTRAINT "gameRooms_pkey" PRIMARY KEY ("id")
);
