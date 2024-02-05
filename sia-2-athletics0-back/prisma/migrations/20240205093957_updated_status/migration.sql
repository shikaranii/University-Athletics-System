/*
  Warnings:

  - Added the required column `isActive` to the `Status` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Status` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `status` ADD COLUMN `isActive` BOOLEAN NOT NULL,
    ADD COLUMN `type` VARCHAR(191) NOT NULL;
