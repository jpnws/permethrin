/*
  Warnings:

  - You are about to drop the column `created` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `updated` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `created` on the `ProjectAttachment` table. All the data in the column will be lost.
  - You are about to drop the column `updated` on the `ProjectAttachment` table. All the data in the column will be lost.
  - You are about to drop the column `created` on the `ProjectComment` table. All the data in the column will be lost.
  - You are about to drop the column `updated` on the `ProjectComment` table. All the data in the column will be lost.
  - You are about to drop the column `created` on the `Ticket` table. All the data in the column will be lost.
  - You are about to drop the column `updated` on the `Ticket` table. All the data in the column will be lost.
  - You are about to drop the column `created` on the `TicketAttachment` table. All the data in the column will be lost.
  - You are about to drop the column `updated` on the `TicketAttachment` table. All the data in the column will be lost.
  - You are about to drop the column `created` on the `TicketComment` table. All the data in the column will be lost.
  - You are about to drop the column `updated` on the `TicketComment` table. All the data in the column will be lost.
  - You are about to drop the column `created` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updated` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Project` DROP COLUMN `created`,
    DROP COLUMN `updated`;

-- AlterTable
ALTER TABLE `ProjectAttachment` DROP COLUMN `created`,
    DROP COLUMN `updated`;

-- AlterTable
ALTER TABLE `ProjectComment` DROP COLUMN `created`,
    DROP COLUMN `updated`;

-- AlterTable
ALTER TABLE `Ticket` DROP COLUMN `created`,
    DROP COLUMN `updated`;

-- AlterTable
ALTER TABLE `TicketAttachment` DROP COLUMN `created`,
    DROP COLUMN `updated`;

-- AlterTable
ALTER TABLE `TicketComment` DROP COLUMN `created`,
    DROP COLUMN `updated`;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `created`,
    DROP COLUMN `updated`;
