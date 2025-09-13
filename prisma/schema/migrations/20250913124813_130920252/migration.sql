/*
  Warnings:

  - Added the required column `authorId` to the `articles` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."articles" ADD COLUMN     "authorId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "public"."authors" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT,
    "avatarUrl" TEXT,
    "bio" TEXT,
    "jobTitle" TEXT,

    CONSTRAINT "authors_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."articles" ADD CONSTRAINT "articles_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "public"."authors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
