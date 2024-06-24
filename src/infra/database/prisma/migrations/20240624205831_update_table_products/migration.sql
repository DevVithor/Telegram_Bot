/*
  Warnings:

  - You are about to drop the column `Product` on the `Products` table. All the data in the column will be lost.
  - Added the required column `product` to the `Products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Products" DROP COLUMN "Product",
ADD COLUMN     "product" TEXT NOT NULL,
ALTER COLUMN "link" DROP DEFAULT,
ALTER COLUMN "link" SET DATA TYPE TEXT;
DROP SEQUENCE "Products_link_seq";
