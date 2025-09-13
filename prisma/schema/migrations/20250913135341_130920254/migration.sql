/*
  Warnings:

  - You are about to drop the `authors` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "public"."UserRoleEnum" AS ENUM ('student', 'admin', 'super_admin');

-- DropForeignKey
ALTER TABLE "public"."articles" DROP CONSTRAINT "articles_authorId_fkey";

-- AlterTable
ALTER TABLE "public"."users" ADD COLUMN     "role" "public"."UserRoleEnum";

-- DropTable
DROP TABLE "public"."authors";

-- AddForeignKey
ALTER TABLE "public"."articles" ADD CONSTRAINT "articles_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "public"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
