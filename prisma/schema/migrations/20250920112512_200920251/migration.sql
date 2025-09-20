/*
  Warnings:

  - You are about to drop the `auth_codes` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `content` to the `articles` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."auth_codes" DROP CONSTRAINT "auth_codes_userId_fkey";

-- AlterTable
ALTER TABLE "public"."articles" ADD COLUMN     "content" TEXT NOT NULL,
ADD COLUMN     "thumb" TEXT NOT NULL DEFAULT 'https://images.ctfassets.net/kftzwdyauwt9/35hDFegmXaio5QTQcX908E/326ac0d57b3e0be6d9e5643e321fbe28/oai_GA_Stories_1.1.png?w=1920&q=90&fm=webp';

-- DropTable
DROP TABLE "public"."auth_codes";
