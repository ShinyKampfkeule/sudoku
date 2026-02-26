/*
  Warnings:

  - You are about to drop the column `open` on the `gameRooms` table. All the data in the column will be lost.
  - Added the required column `public` to the `gameRooms` table without a default value. This is not possible if the table is not empty.
  - Added the required column `visible` to the `gameRooms` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "gameRooms" DROP COLUMN "open",
ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "public" BOOLEAN NOT NULL,
ADD COLUMN     "visible" BOOLEAN NOT NULL;
