/*
  Warnings:

  - You are about to drop the `_ParticipantsTickets` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `_ParticipantsTickets`;

-- CreateTable
CREATE TABLE `_TicketToUser` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_TicketToUser_AB_unique`(`A`, `B`),
    INDEX `_TicketToUser_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
