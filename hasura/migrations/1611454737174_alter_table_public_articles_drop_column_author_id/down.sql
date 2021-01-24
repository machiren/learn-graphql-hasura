ALTER TABLE "public"."articles" ADD COLUMN "author_id" text;
ALTER TABLE "public"."articles" ALTER COLUMN "author_id" DROP NOT NULL;
