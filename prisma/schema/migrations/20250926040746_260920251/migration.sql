/*
  Warnings:

  - The values [super_admin] on the enum `UserRoleEnum` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "public"."UserRoleEnum_new" AS ENUM ('student', 'author', 'admin');
ALTER TABLE "public"."Invite" ALTER COLUMN "role" DROP DEFAULT;
ALTER TABLE "public"."users" ALTER COLUMN "role" DROP DEFAULT;
ALTER TABLE "public"."users" ALTER COLUMN "role" TYPE "public"."UserRoleEnum_new" USING ("role"::text::"public"."UserRoleEnum_new");
ALTER TABLE "public"."Invite" ALTER COLUMN "role" TYPE "public"."UserRoleEnum_new" USING ("role"::text::"public"."UserRoleEnum_new");
ALTER TYPE "public"."UserRoleEnum" RENAME TO "UserRoleEnum_old";
ALTER TYPE "public"."UserRoleEnum_new" RENAME TO "UserRoleEnum";
DROP TYPE "public"."UserRoleEnum_old";
ALTER TABLE "public"."Invite" ALTER COLUMN "role" SET DEFAULT 'author';
ALTER TABLE "public"."users" ALTER COLUMN "role" SET DEFAULT 'student';
COMMIT;

-- AlterTable
ALTER TABLE "public"."Invite" ALTER COLUMN "role" SET DEFAULT 'author';
