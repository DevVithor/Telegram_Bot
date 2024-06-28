/*
  Warnings:

  - You are about to drop the column `groupsId` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the `Groups` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Products" DROP CONSTRAINT "Products_groupsId_fkey";

-- AlterTable
ALTER TABLE "Products" DROP COLUMN "groupsId",
ADD COLUMN     "groupId" INTEGER;

-- DropTable
DROP TABLE "Groups";

-- CreateTable
CREATE TABLE "Group" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Group_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE SET NULL ON UPDATE CASCADE;
