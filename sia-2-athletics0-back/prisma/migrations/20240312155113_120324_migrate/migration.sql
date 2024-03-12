/*
  Warnings:

  - You are about to drop the column `acadYear` on the `faculty` table. All the data in the column will be lost.
  - You are about to drop the column `StatusId` on the `student` table. All the data in the column will be lost.
  - You are about to drop the column `acadYear` on the `student` table. All the data in the column will be lost.
  - You are about to drop the column `contactNumber` on the `student` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `student` table. All the data in the column will be lost.
  - You are about to drop the column `emergencyContact` on the `student` table. All the data in the column will be lost.
  - You are about to drop the column `emergencyContactPerson` on the `student` table. All the data in the column will be lost.
  - You are about to drop the column `sport` on the `student` table. All the data in the column will be lost.
  - You are about to drop the `sport` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `contact` to the `student` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `student` DROP FOREIGN KEY `Student_StatusId_fkey`;

-- DropIndex
DROP INDEX `Student_contactNumber_key` ON `student`;

-- DropIndex
DROP INDEX `Student_email_key` ON `student`;

-- AlterTable
ALTER TABLE `faculty` DROP COLUMN `acadYear`,
    ADD COLUMN `email` VARCHAR(191) NULL,
    MODIFY `name` VARCHAR(191) NULL,
    MODIFY `year` INTEGER NULL,
    MODIFY `emergencyContact` INTEGER NULL,
    MODIFY `emergencyContactPerson` VARCHAR(191) NULL,
    MODIFY `nationality` VARCHAR(191) NULL,
    MODIFY `weight` DOUBLE NULL,
    MODIFY `height` DOUBLE NULL,
    MODIFY `bloodType` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `student` DROP COLUMN `StatusId`,
    DROP COLUMN `acadYear`,
    DROP COLUMN `contactNumber`,
    DROP COLUMN `email`,
    DROP COLUMN `emergencyContact`,
    DROP COLUMN `emergencyContactPerson`,
    DROP COLUMN `sport`,
    ADD COLUMN `contact` INTEGER NOT NULL,
    ADD COLUMN `medicalCertificate` VARCHAR(191) NULL,
    ADD COLUMN `sportId` INTEGER NULL,
    MODIFY `UpdatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0);

-- DropTable
DROP TABLE `sport`;

-- CreateTable
CREATE TABLE `sports` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `CreatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `UpdatedAt` DATETIME(3) NOT NULL,
    `sportCat` ENUM('DoTA', 'Valorant', 'SwimmingMen', 'SwimmingWomen', 'BasketballMen', 'BasketballWomen') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `student_sportId_fkey` ON `student`(`sportId`);

-- AddForeignKey
ALTER TABLE `student` ADD CONSTRAINT `student_sportId_fkey` FOREIGN KEY (`sportId`) REFERENCES `sports`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- RenameIndex
ALTER TABLE `student` RENAME INDEX `Student_firstName_key` TO `student_firstName_key`;

-- RenameIndex
ALTER TABLE `student` RENAME INDEX `Student_lastName_key` TO `student_lastName_key`;
