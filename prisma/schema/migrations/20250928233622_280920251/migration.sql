-- DropForeignKey
ALTER TABLE "public"."article_categories" DROP CONSTRAINT "article_categories_articleId_fkey";

-- DropForeignKey
ALTER TABLE "public"."article_categories" DROP CONSTRAINT "article_categories_categoryId_fkey";

-- AddForeignKey
ALTER TABLE "public"."article_categories" ADD CONSTRAINT "article_categories_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "public"."articles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."article_categories" ADD CONSTRAINT "article_categories_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "public"."categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;
