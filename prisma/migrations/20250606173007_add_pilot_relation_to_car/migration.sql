/*
  Warnings:

  - You are about to drop the column `createdAt` on the `team` table. All the data in the column will be lost.
  - Added the required column `pilotId` to the `Car` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `car` ADD COLUMN `pilotId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `team` DROP COLUMN `createdAt`;

-- AddForeignKey
ALTER TABLE `Car` ADD CONSTRAINT `Car_pilotId_fkey` FOREIGN KEY (`pilotId`) REFERENCES `Member`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
