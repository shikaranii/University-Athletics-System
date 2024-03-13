/*
  Warnings:

  - You are about to drop the column `CreatedAt` on the `faculty` table. All the data in the column will be lost.
  - You are about to drop the column `StatusId` on the `faculty` table. All the data in the column will be lost.
  - You are about to drop the column `UpdatedAt` on the `faculty` table. All the data in the column will be lost.
  - You are about to drop the column `CreatedAt` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `UpdatedAt` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `firstName` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `user` table. All the data in the column will be lost.
  - Added the required column `email` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `faculty` DROP FOREIGN KEY `Faculty_StatusId_fkey`;

-- DropIndex
DROP INDEX `User_firstName_key` ON `user`;

-- DropIndex
DROP INDEX `User_lastName_key` ON `user`;

-- AlterTable
ALTER TABLE `faculty` DROP COLUMN `CreatedAt`,
    DROP COLUMN `StatusId`,
    DROP COLUMN `UpdatedAt`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `CreatedAt`,
    DROP COLUMN `UpdatedAt`,
    DROP COLUMN `firstName`,
    DROP COLUMN `lastName`,
    ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `password` VARCHAR(191) NOT NULL;
