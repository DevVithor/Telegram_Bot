/*
  Warnings:

  - Added the required column `validity` to the `Group` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Group" ADD COLUMN     "validity" TIMESTAMP(3) NOT NULL;
