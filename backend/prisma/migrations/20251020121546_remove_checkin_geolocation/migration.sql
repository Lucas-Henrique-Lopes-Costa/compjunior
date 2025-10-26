/*
  Warnings:

  - You are about to drop the column `latitude` on the `checkins` table. All the data in the column will be lost.
  - You are about to drop the column `longitude` on the `checkins` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "checkins" DROP COLUMN "latitude",
DROP COLUMN "longitude";
