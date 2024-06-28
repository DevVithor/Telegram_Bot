/*
  Warnings:

  - You are about to drop the column `group_id` on the `Products` table. All the data in the column will be lost.
  - Added the required column `groupsId` to the `Products` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Products" DROP CONSTRAINT "Products_group_id_fkey";

-- AlterTable
ALTER TABLE "Products" DROP COLUMN "group_id",
ADD COLUMN     "groupsId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_groupsId_fkey" FOREIGN KEY ("groupsId") REFERENCES "Groups"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
