-- AlterTable
ALTER TABLE `Project` MODIFY `description` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `ProjectComment` MODIFY `comment` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `Ticket` MODIFY `description` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `TicketComment` MODIFY `body` TEXT NOT NULL;
