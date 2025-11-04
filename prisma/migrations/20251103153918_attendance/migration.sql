/*
  Warnings:

  - You are about to drop the column `userId` on the `attendance` table. All the data in the column will be lost.
  - Added the required column `user_id` to the `Attendance` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `attendance` DROP FOREIGN KEY `Attendance_userId_fkey`;

-- DropIndex
DROP INDEX `Attendance_userId_fkey` ON `attendance`;

-- AlterTable
ALTER TABLE `attendance` DROP COLUMN `userId`,
    ADD COLUMN `user_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Attendance` ADD CONSTRAINT `Attendance_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
