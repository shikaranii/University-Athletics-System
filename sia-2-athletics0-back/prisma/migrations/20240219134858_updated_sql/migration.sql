/*
  Warnings:

  - You are about to drop the column `sportType` on the `sport` table. All the data in the column will be lost.
  - You are about to drop the `person` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `sportCategory` to the `Sport` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `person` DROP FOREIGN KEY `Person_StatusId_fkey`;

-- AlterTable
ALTER TABLE `sport` DROP COLUMN `sportType`,
    ADD COLUMN `sportCategory` ENUM('MEN', 'WOMEN') NOT NULL;

-- DropTable
DROP TABLE `person`;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `CreatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `UpdatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `User_firstName_key`(`firstName`),
    UNIQUE INDEX `User_lastName_key`(`lastName`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Student` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `sport` VARCHAR(191) NOT NULL,
    `contactNumber` INTEGER NOT NULL,
    `course` VARCHAR(191) NOT NULL,
    `year` INTEGER NOT NULL,
    `birthdate` VARCHAR(191) NOT NULL,
    `nationality` VARCHAR(191) NOT NULL,
    `acadYear` INTEGER NOT NULL,
    `weight` DOUBLE NOT NULL,
    `height` DOUBLE NOT NULL,
    `emergencyContact` INTEGER NOT NULL,
    `emergencyContactPerson` VARCHAR(191) NOT NULL,
    `bloodType` VARCHAR(191) NOT NULL,
    `StatusId` INTEGER NOT NULL,
    `CreatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `UpdatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Student_firstName_key`(`firstName`),
    UNIQUE INDEX `Student_lastName_key`(`lastName`),
    UNIQUE INDEX `Student_email_key`(`email`),
    UNIQUE INDEX `Student_contactNumber_key`(`contactNumber`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Faculty` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `year` INTEGER NOT NULL,
    `emergencyContact` INTEGER NOT NULL,
    `emergencyContactPerson` VARCHAR(191) NOT NULL,
    `nationality` VARCHAR(191) NOT NULL,
    `weight` DOUBLE NOT NULL,
    `height` DOUBLE NOT NULL,
    `bloodType` VARCHAR(191) NOT NULL,
    `acadYear` INTEGER NOT NULL,
    `StatusId` INTEGER NOT NULL,
    `CreatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `UpdatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `InventoryItems` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `SportId` INTEGER NOT NULL,

    UNIQUE INDEX `InventoryItems_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Student` ADD CONSTRAINT `Student_StatusId_fkey` FOREIGN KEY (`StatusId`) REFERENCES `Status`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Faculty` ADD CONSTRAINT `Faculty_StatusId_fkey` FOREIGN KEY (`StatusId`) REFERENCES `Status`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
