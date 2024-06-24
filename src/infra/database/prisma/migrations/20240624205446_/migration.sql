/*
  Warnings:

  - You are about to drop the column `linkId` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the `Link` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Products" DROP CONSTRAINT "Products_linkId_fkey";

-- AlterTable
ALTER TABLE "Products" DROP COLUMN "linkId",
ADD COLUMN     "link" SERIAL NOT NULL;

-- DropTable
DROP TABLE "Link";
