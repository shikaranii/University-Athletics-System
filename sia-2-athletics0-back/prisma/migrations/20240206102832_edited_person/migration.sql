/*
  Warnings:

  - You are about to drop the column `BloodId` on the `person` table. All the data in the column will be lost.
  - You are about to drop the column `NationalityId` on the `person` table. All the data in the column will be lost.
  - You are about to drop the `blood` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `nationality` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[firstName]` on the table `Person` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[lastName]` on the table `Person` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `bloodType` to the `Person` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nationality` to the `Person` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `person` DROP FOREIGN KEY `Person_BloodId_fkey`;

-- DropForeignKey
ALTER TABLE `person` DROP FOREIGN KEY `Person_NationalityId_fkey`;

-- AlterTable
ALTER TABLE `person` DROP COLUMN `BloodId`,
    DROP COLUMN `NationalityId`,
    ADD COLUMN `bloodType` VARCHAR(191) NOT NULL,
    ADD COLUMN `nationality` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `blood`;

-- DropTable
DROP TABLE `nationality`;

-- CreateTable
CREATE TABLE `Student` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `PersonId` INTEGER NOT NULL,
    `course` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Person_firstName_key` ON `Person`(`firstName`);

-- CreateIndex
CREATE UNIQUE INDEX `Person_lastName_key` ON `Person`(`lastName`);

-- AddForeignKey
ALTER TABLE `Student` ADD CONSTRAINT `Student_PersonId_fkey` FOREIGN KEY (`PersonId`) REFERENCES `Person`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
