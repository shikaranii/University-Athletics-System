/*
  Warnings:

  - You are about to drop the column `ExternalEventId` on the `events` table. All the data in the column will be lost.
  - You are about to drop the column `InternalEventId` on the `events` table. All the data in the column will be lost.
  - You are about to alter the column `bloodType` on the `person` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(0))`.
  - You are about to drop the `externalevent` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `internalevent` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `student` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `eventType` to the `Events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `personrole` to the `Person` table without a default value. This is not possible if the table is not empty.
  - Added the required column `UpdatedAt` to the `Sport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sportType` to the `Sport` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `events` DROP FOREIGN KEY `Events_ExternalEventId_fkey`;

-- DropForeignKey
ALTER TABLE `events` DROP FOREIGN KEY `Events_InternalEventId_fkey`;

-- DropForeignKey
ALTER TABLE `student` DROP FOREIGN KEY `Student_PersonId_fkey`;

-- AlterTable
ALTER TABLE `events` DROP COLUMN `ExternalEventId`,
    DROP COLUMN `InternalEventId`,
    ADD COLUMN `eventDetails` VARCHAR(191) NULL,
    ADD COLUMN `eventType` ENUM('INTERNAL', 'EXTERNAL') NOT NULL;

-- AlterTable
ALTER TABLE `person` ADD COLUMN `personrole` ENUM('FACULTY', 'STUDENT') NOT NULL,
    MODIFY `bloodType` ENUM('A', 'B', 'AB', 'O') NOT NULL;

-- AlterTable
ALTER TABLE `sport` ADD COLUMN `CreatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `UpdatedAt` DATETIME(3) NOT NULL,
    ADD COLUMN `sportType` ENUM('MEN', 'WOMEN') NOT NULL;

-- DropTable
DROP TABLE `externalevent`;

-- DropTable
DROP TABLE `internalevent`;

-- DropTable
DROP TABLE `student`;
