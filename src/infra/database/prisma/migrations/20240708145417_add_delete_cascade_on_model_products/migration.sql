-- DropForeignKey
ALTER TABLE "Products" DROP CONSTRAINT "Products_groupId_fkey";

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE CASCADE ON UPDATE CASCADE;
