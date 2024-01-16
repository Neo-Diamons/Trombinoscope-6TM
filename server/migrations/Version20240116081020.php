<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240116081020 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE peoples (name VARCHAR(255) NOT NULL, firstname VARCHAR(255) NOT NULL, job VARCHAR(255) NOT NULL, equip VARCHAR(255) NOT NULL, agency VARCHAR(255) NOT NULL, photo_fun_url VARCHAR(255) DEFAULT NULL, photo_pro_url VARCHAR(255) DEFAULT NULL, PRIMARY KEY(name, firstname))');
        $this->addSql('CREATE TABLE users (username VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL, PRIMARY KEY(username))');
        
        $this->addSql('INSERT INTO peoples SELECT * FROM trombidb.peoples');
        $this->addSql('INSERT INTO users SELECT * FROM trombidb.users');
        
        // $this->addSql('DROP TABLE trombidb.peoples');
        // $this->addSql('DROP TABLE trombidb.users');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('CREATE SCHEMA trombidb');
        $this->addSql('CREATE TABLE trombidb.peoples (name VARCHAR(255) NOT NULL, firstname VARCHAR(255) NOT NULL, job VARCHAR(255) NOT NULL, equip VARCHAR(255) NOT NULL, agency VARCHAR(255) NOT NULL, photo_fun_url VARCHAR(255) DEFAULT NULL, photo_pro_url VARCHAR(255) DEFAULT NULL, PRIMARY KEY(name, firstname))');
        $this->addSql('CREATE TABLE trombidb.users (username VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL, PRIMARY KEY(username))');

        // $this->addSql('INSERT INTO peoples SELECT * FROM trombidb.peoples');
        // $this->addSql('INSERT INTO users SELECT * FROM trombidb.users');

        // $this->addSql('DROP TABLE peoples');
        // $this->addSql('DROP TABLE users');
    }
}
