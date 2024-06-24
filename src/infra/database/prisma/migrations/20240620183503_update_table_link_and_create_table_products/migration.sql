/*
  Warnings:

  - Added the required column `links` to the `Link` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Link" ADD COLUMN     "links" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Products" (
    "id" SERIAL NOT NULL,
    "Product" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "linkId" INTEGER NOT NULL,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_linkId_fkey" FOREIGN KEY ("linkId") REFERENCES "Link"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
