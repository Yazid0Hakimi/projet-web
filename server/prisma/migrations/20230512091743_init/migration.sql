/*
  Warnings:

  - Added the required column `hashedPassword` to the `Utilisateur` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `utilisateur` ADD COLUMN `hashedPassword` VARCHAR(191) NOT NULL,
    MODIFY `password` VARCHAR(191) NULL;
