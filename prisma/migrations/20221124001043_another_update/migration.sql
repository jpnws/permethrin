/*
  Warnings:

  - You are about to drop the column `src` on the `TicketAttachment` table. All the data in the column will be lost.
  - Added the required column `url` to the `TicketAttachment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `TicketAttachment` DROP COLUMN `src`,
    ADD COLUMN `url` VARCHAR(191) NOT NULL;
