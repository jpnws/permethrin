-- AlterTable
ALTER TABLE `Project` MODIFY `slug` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `avatar` VARCHAR(191) NOT NULL DEFAULT '';
