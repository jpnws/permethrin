/*
  Warnings:

  - You are about to drop the column `body` on the `TicketComment` table. All the data in the column will be lost.
  - Added the required column `content` to the `TicketComment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `TicketComment` DROP COLUMN `body`,
    ADD COLUMN `content` TEXT NOT NULL;
