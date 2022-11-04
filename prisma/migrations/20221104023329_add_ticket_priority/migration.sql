/*
  Warnings:

  - You are about to alter the column `priority` on the `Ticket` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Enum("Ticket_priority")`.

*/
-- AlterTable
ALTER TABLE `Ticket` MODIFY `priority` ENUM('LOW', 'MEDIUM', 'HIGH') NOT NULL;
