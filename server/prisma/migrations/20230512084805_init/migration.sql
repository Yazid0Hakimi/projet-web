-- DropForeignKey
ALTER TABLE `article` DROP FOREIGN KEY `Article_utilisateurId_fkey`;

-- AddForeignKey
ALTER TABLE `Article` ADD CONSTRAINT `Article_utilisateurId_fkey` FOREIGN KEY (`utilisateurId`) REFERENCES `Utilisateur`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
