/*
  Warnings:

  - Added the required column `type` to the `Blood` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Nationality` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `blood` ADD COLUMN `type` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `nationality` ADD COLUMN `name` VARCHAR(191) NOT NULL;
