CREATE DATABASE trombiDb;

CREATE OR REPLACE FUNCTION InitializeDatabase()
 RETURNS void AS $$
BEGIN
    (SELECT * FROM information_schema.tables
                   WHERE table_schema = 'trombiDb'
                   AND table_name = 'peoples') THEN
        CREATE TABLE trombiDb.peoples (
            id INT NOT NULL AUTO_INCREMENT,
            name VARCHAR(255) NOT NULL,
            firstname VARCHAR(255) NOT NULL,
            job VARCHAR(255) NOT NULL,
            equip VARCHAR(255) NOT NULL,
            agency VARCHAR(255) NOT NULL,
            photo_fun_url VARCHAR(255),
            photo_pro_url VARCHAR(255),
            PRIMARY KEY (id)
        );

INSERT INTO peoples (name, firstname, job, equip, agency, photo_fun_url, photo_pro_url)
VALUES
('AHMANE', 'Hafid', 'Développeur', 'Pôle AI', 'Rennes', 'https://trombi.6tmphp.fr/images/pro/AHMANE-Hafid.jpg', 'https://trombi.6tmphp.fr/images/fun/AHMANE-Hafid.jpg'),
('ANDRES', 'Frédéric', 'Responsable d équipe', 'Pôle AI', 'Rennes', 'https://trombi.6tmphp.fr/images/pro/ANDRES-Frederic.jpg', 'https://trombi.6tmphp.fr/images/fun/ANDRES-Frederic.jpg'),
('AUBRY', 'Christophe', 'Développeur Senior', 'Pôle Walker', 'Rennes'),
('AULNETTE', 'Philippe', 'Directeur Technique ', 'Team IT', 'Rennes', 'https://trombi.6tmphp.fr/images/pro/AULNETTE-Philippe.jpg', 'https://trombi.6tmphp.fr/images/fun/AULNETTE-Philippe.jpg'),
('AVALIANI', 'Ketevan', 'Assistante administrative', 'Team Rocket', 'Rennes'),
('BAUDOT', 'Tom', 'Développeur ', 'Pôle Cousteau ', 'Rennes', 'https://trombi.6tmphp.fr/images/pro/BAUDOT-Tom.jpg', 'https://trombi.6tmphp.fr/images/fun/BAUDOT-Tom.jpg'),
('BEAUFILS', 'Maud', 'Product Owner', 'Pôle 8.6', 'Rennes', 'https://trombi.6tmphp.fr/images/pro/BEAUFILS-Maud.jpg', 'https://trombi.6tmphp.fr/images/fun/BEAUFILS-Maud.jpg'),
('CANTEPIE', 'Adrien', 'Développeur', 'Pôle Cousteau ', 'Rennes', 'https://trombi.6tmphp.fr/images/pro/CANTEPIE-Adrien.jpg', 'https://trombi.6tmphp.fr/images/fun/CANTEPIE-Adrien.jpg'),
('CARNEIRO', 'Mickael', 'RSI ', 'Team IT ', 'Rennes', 'https://trombi.6tmphp.fr/images/pro/CARNEIRO-Mickael.jpg', 'https://trombi.6tmphp.fr/images/fun/CARNEIRO-Mickael.jpg'),
('CASTEX', 'David', 'Développeur', 'Pôle Position', 'Rennes', 'https://trombi.6tmphp.fr/images/pro/CASTEX-David.jpg', 'https://trombi.6tmphp.fr/images/fun/CASTEX-David.jpg'),
('CHAPUIS', 'Brice', 'Développeur', 'Bug Buster', 'Rennes'),
('CHEVALIER', 'Elodie', 'Product Owner', 'Pôle Position', 'Rennes', 'https://trombi.6tmphp.fr/images/pro/CHEVALIER-Elodie.jpg', 'https://trombi.6tmphp.fr/images/fun/CHEVALIER-Elodie.jpg'),
('CHEVALIER', 'Benoît', 'Développeur', 'Team Elephant ', 'Rennes'),
('COET', 'Jean', 'Développeur', 'Pôle Cousteau ', 'Rennes', 'https://trombi.6tmphp.fr/images/pro/COET-Jean.jpg', 'https://trombi.6tmphp.fr/images/fun/COET-Jean.jpg'),
('COUTAND', 'Bastien', 'Alternant', 'Team IT ', 'Rennes'),
('CRUTEL', 'Pauline', 'Chargée de recrutement ', 'Team Rocket ', 'Rennes', 'https://trombi.6tmphp.fr/images/pro/CRUTEL-Pauline.jpg', 'https://trombi.6tmphp.fr/images/fun/CRUTEL-Pauline.jpg'),
('DANTAN', 'Remy', 'Développeur ', 'Team Eden', 'Rennes', 'https://trombi.6tmphp.fr/images/pro/DANTAN-Remy.jpg', 'https://trombi.6tmphp.fr/images/fun/DANTAN-Remy.jpg'),
('DE MONCUIT', 'Gaëtan', 'Responsable Marketing ', 'Team Rocket ', 'Rennes', 'https://trombi.6tmphp.fr/images/pro/DE-MONCUIT-Gaetan.jpg', 'https://trombi.6tmphp.fr/images/fun/DE-MONCUIT-Gaetan.jpg'),
('DELANOE', 'Julien', 'Développeur', 'Bug Buster', 'Rennes'),
('DELENTE', 'Edouard', 'Responsable Développement', 'Team Rocket ', 'Rennes', 'https://trombi.6tmphp.fr/images/pro/DELENTE-Edouard.jpg', 'https://trombi.6tmphp.fr/images/fun/DELENTE-Edouard.jpg'),
('DESGRANGES', 'Pierre', 'Développeur Junior', 'Pôle Position ', 'Rennes'),
('DIGUET', 'Lucas', 'Développeur ', 'Pôle 8.6', 'Rennes', 'https://trombi.6tmphp.fr/images/pro/DIGUET-Lucas.jpg', 'https://trombi.6tmphp.fr/images/fun/DIGUET-Lucas.jpg'),
('FAILLIE', 'Michel', 'Directeur de l agence d Angers ', 'Team Rocket', 'Rennes', 'https://trombi.6tmphp.fr/images/pro/FAILLIE-Michel.jpg', 'https://trombi.6tmphp.fr/images/fun/FAILLIE-Michel.jpg'),
('GANTOIS', 'Emilien', 'Développeur', 'Pôle Cousteau ', 'Rennes', 'https://trombi.6tmphp.fr/images/pro/GANTOIS-Emilien.jpg', 'https://trombi.6tmphp.fr/images/fun/GANTOIS-Emilien.jpg'),
('GAUCHER', 'Clara', 'Chef de Projet', 'Pôle Walker', 'Rennes'),
('GELEBART', 'Nicolas', 'Business Manager', 'Team Rocket ', 'Rennes'),
('GINGUENEAU', 'Pauline', 'Assistante Commerciale ', 'Team Rocket ', 'Rennes'),
('GOSSELIN', 'Antoine', 'Développeur Junior', 'Pôle Walker', 'Rennes'),
('GREFFIER', 'Jean-Christophe', 'Administrateur Système & Réseau', 'Team IT ', 'Rennes', 'https://trombi.6tmphp.fr/images/pro/GREFFIER-Jean-Christophe.jpg', 'https://trombi.6tmphp.fr/images/fun/GREFFIER-Jean-Christophe.jpg'),
('GUERIN', 'Nicolas', 'Développeur', 'Pôle Walker', 'Rennes', 'https://trombi.6tmphp.fr/images/pro/GUERIN-Nicolas.jpg', 'https://trombi.6tmphp.fr/images/fun/GUERIN-Nicolas.jpg'),
('GUILBERT', 'Antoine', 'Chef de Projet', 'Bug Buster', 'Rennes', 'https://trombi.6tmphp.fr/images/pro/GUILBERT-Antoine.jpg', 'https://trombi.6tmphp.fr/images/fun/GUILBERT-Antoine.jpg'),
('JEZEQUEL', 'Vincent', 'Responsable Technique ', 'Pôle Position', 'Rennes', 'https://trombi.6tmphp.fr/images/pro/JEZEQUEL-Vincent.jpg', 'https://trombi.6tmphp.fr/images/fun/JEZEQUEL-Vincent.jpg'),
('JUBLAN', 'Sandrine', 'Assistante administrative', 'Team Rocket', 'Rennes', 'https://trombi.6tmphp.fr/images/pro/JUBLAN-Sandrine.jpg', 'https://trombi.6tmphp.fr/images/fun/JUBLAN-Sandrine.jpg'),
('LE COQ', 'Alexandra', 'Comptable ', 'Team Rocket', 'Rennes', 'https://trombi.6tmphp.fr/images/pro/LE-COQ-Alexandra.jpg', 'https://trombi.6tmphp.fr/images/fun/LE-COQ-Alexandra.jpg'),
('LE GOFF', 'Sébastien', 'Développeur Senior ', 'Bug Buster', 'Rennes'),
('LECOLAZET', 'Aymeric', 'Alternant', 'Team Elephant ', 'Rennes', 'https://trombi.6tmphp.fr/images/pro/LECOLAZET-Aymeric.jpg', 'https://trombi.6tmphp.fr/images/fun/LECOLAZET-Aymeric.jpg'),
('LEGRAND', 'Thomas', 'Responsable d Equipe', 'Pôle Position ', 'Rennes'),
('LEMARIE', 'Benjamin', 'Design Manager', 'Studio Design', 'Rennes', 'https://trombi.6tmphp.fr/images/pro/LEMARIE-Benjamin.jpg', 'https://trombi.6tmphp.fr/images/fun/LEMARIE-Benjamin.jpg'),
('LERAY', 'Romain', 'Développeur ', 'Bug Buster', 'Rennes', 'https://trombi.6tmphp.fr/images/pro/LERAY-Romain.jpg', 'https://trombi.6tmphp.fr/images/fun/LERAY-Romain.jpg'),
('LESAGE', 'Olivier', 'Développeur Senior ', 'Pôle AI', 'Rennes', 'https://trombi.6tmphp.fr/images/pro/LESAGE-Olivier.jpg', 'https://trombi.6tmphp.fr/images/fun/LESAGE-Olivier.jpg'),
('LEVASSEUR', 'Damien', 'Développeur ', 'Team Eden', 'Rennes', 'https://trombi.6tmphp.fr/images/pro/LEVASSEUR-Damien.jpg', 'https://trombi.6tmphp.fr/images/fun/LEVASSEUR-Damien.jpg'),
('LIDURIN', 'Maël', 'Développeur / Chef de Projet ', 'Pôle AI', 'Rennes', 'https://trombi.6tmphp.fr/images/pro/LIDURIN-Mael.jpg', 'https://trombi.6tmphp.fr/images/fun/LIDURIN-Mael.jpg'),
('LOICHON', 'Yvan', 'Intégrateur ', 'Studio Design', 'Rennes', 'https://trombi.6tmphp.fr/images/pro/LOICHON-Yvan.jpg', 'https://trombi.6tmphp.fr/images/fun/LOICHON-Yvan.jpg'),
('LOUSTAU', 'Quentin', 'Développeur ', 'Team Eden', 'Rennes', 'https://trombi.6tmphp.fr/images/pro/LOUSTAU-Quentin.jpg', 'https://trombi.6tmphp.fr/images/fun/LOUSTAU-Quentin.jpg'),
('LOUVEAU', 'Bertille', 'Chargée de communication ', 'Team Rocket', 'Rennes'),
('MADEC', 'Florian', 'Développeur Junior', 'Pôle Cousteau ', 'Rennes', 'https://trombi.6tmphp.fr/images/pro/MADEC-Florian.jpg', 'https://trombi.6tmphp.fr/images/fun/MADEC-Florian.jpg'),
('MESLET', 'Faustine', 'Talent Acquisition Specialist', 'Team Rocket ', 'Rennes', 'https://trombi.6tmphp.fr/images/pro/MESLET-Faustine.jpg', 'https://trombi.6tmphp.fr/images/fun/MESLET-Faustine.jpg'),
('MUSET', 'Clément', 'Développeur', 'Pôle Cousteau ', 'Rennes', 'https://trombi.6tmphp.fr/images/pro/MUSET-Clement.jpg', 'https://trombi.6tmphp.fr/images/fun/MUSET-Clement.jpg'),
('OBEE', 'Boris', 'Technicien Support', 'Pôle AI', 'Rennes', 'https://trombi.6tmphp.fr/images/pro/OBEE-Boris.jpg', 'https://trombi.6tmphp.fr/images/fun/OBEE-Boris.jpg'),
('OZEAU', 'Morgan', 'Développeur Senior ', 'Pôle 8.6', 'Rennes', 'https://trombi.6tmphp.fr/images/pro/OZEAU-Morgan.jpg', 'https://trombi.6tmphp.fr/images/fun/OZEAU-Morgan.jpg'),
('PERCHEREL ', 'Ludovic', 'Responsable d équipe', 'Bug Buster', 'Rennes', 'https://trombi.6tmphp.fr/images/pro/PERCHEREL-Ludovic.jpg', 'https://trombi.6tmphp.fr/images/fun/PERCHEREL-Ludovic.jpg'),
('PERLINSKI', 'Alix', 'Cheffe de projet', 'Team Elephant ', 'Rennes'),
('POISSON', 'Florian', 'Développeur Junior', 'Pôle Position ', 'Rennes', 'https://trombi.6tmphp.fr/images/pro/POISSON-Florian.jpg', 'https://trombi.6tmphp.fr/images/fun/POISSON-Florian.jpg'),
('PRUD HOMME', 'Emilie', 'Cheffe de projet', 'Pôle Cousteau ', 'Rennes'),
('QUENTEL', 'Thomas', 'Développeur', 'Pôle Position', 'Rennes', 'https://trombi.6tmphp.fr/images/pro/QUENTEL-Thomas.jpg', 'https://trombi.6tmphp.fr/images/fun/QUENTEL-Thomas.jpg'),
('RAMAUGE', 'Benjamin', 'Développeur ', 'Pôle Walker', 'Rennes', 'https://trombi.6tmphp.fr/images/pro/RAMAUGE-Benjamin.jpg', 'https://trombi.6tmphp.fr/images/fun/RAMAUGE-Benjamin.jpg'),
('RENARD', 'Valentin', 'Développeur ', 'Pôle Position', 'Rennes', 'https://trombi.6tmphp.fr/images/pro/RENARD-Valentin.jpg', 'https://trombi.6tmphp.fr/images/fun/RENARD-Valentin.jpg'),
('ROUSSEAU', 'Yoann', 'Développeur Junior', 'Bug Buster', 'Rennes', 'https://trombi.6tmphp.fr/images/pro/ROUSSEAU-Yoann.jpg', 'https://trombi.6tmphp.fr/images/fun/ROUSSEAU-Yoann.jpg'),
('SAUVE', 'Christophe', 'Chef de projet', 'Pôle Cousteau ', 'Rennes', 'https://trombi.6tmphp.fr/images/pro/SAUVE-Christophe.jpg', 'https://trombi.6tmphp.fr/images/fun/SAUVE-Christophe.jpg'),
('SAUVE', 'Karine', 'Directrice Administrative et Financière', 'Team Rocket ', 'Rennes', 'https://trombi.6tmphp.fr/images/pro/SAUVE-Karine.jpg', 'https://trombi.6tmphp.fr/images/fun/SAUVE-Karine.jpg'),
('SIMON', 'Thomas', 'Responsable d équipe', 'Pôle Walker', 'Rennes', 'https://trombi.6tmphp.fr/images/pro/SIMON-Thomas.jpg', 'https://trombi.6tmphp.fr/images/fun/SIMON-Thomas.jpg'),
('TARLET', 'Emeline', 'Alternant', 'Team Rocket ', 'Rennes'),
('THOMAS', 'Pierre-Yves', 'Développeur ', 'Bug Buster', 'Rennes', 'https://trombi.6tmphp.fr/images/pro/THOMAS-Pierre-Yves.jpg', 'https://trombi.6tmphp.fr/images/fun/THOMAS-Pierre-Yves.jpg'),
('TOQUE', 'Julien', 'Business Developer ', 'Team Rocket', 'Rennes'),
('TREMIER', 'Stéphane', 'Président ', 'Team Rocket ', 'Rennes', 'https://trombi.6tmphp.fr/images/pro/TREMIER-Stephane.jpg', 'https://trombi.6tmphp.fr/images/fun/TREMIER-Stephane.jpg'),
('VANNIER', 'Samuel', 'Développeur Junior', 'Pôle AI', 'Rennes', 'https://trombi.6tmphp.fr/images/pro/VANNIER-Samuel.jpg', 'https://trombi.6tmphp.fr/images/fun/VANNIER-Samuel.jpg'),
('VEILLAUX', 'Pierre', 'Business Developer Junior ', 'Team Rocket', 'Rennes', 'https://trombi.6tmphp.fr/images/pro/VEILLAUX-Pierre.jpg', 'https://trombi.6tmphp.fr/images/fun/VEILLAUX-Pierre.jpg'),
('VERON', 'Maël', 'Développeur Junior', 'Pôle 8.6', 'Rennes', 'https://trombi.6tmphp.fr/images/pro/VERON-Mael.jpg', 'https://trombi.6tmphp.fr/images/fun/VERON-Mael.jpg'),
('AUPIAIS', 'David', 'Ingénieur Fullstack', 'Pôle Passe Partout ', 'Angers'),
('BIORET', 'Nicolas', 'Développeur', 'Pôle Passe Partout ', 'Angers'),
('BONTEMPS', 'Quentin', 'Analyste développeur', 'Pôle Passe Partout ', 'Angers', 'https://trombi.6tmphp.fr/images/pro/BONTEMPS-Quentin.jpg', 'https://trombi.6tmphp.fr/images/fun/BONTEMPS-Quentin.jpg'),
('CHENARD', 'Renaud', 'Développeur', 'Pôle Griffondor', 'Angers', 'https://trombi.6tmphp.fr/images/pro/CHENARD-Renaud.jpg', 'https://trombi.6tmphp.fr/images/fun/CHENARD-Renaud.jpg'),
('DELCROS', 'Cédric', 'Chef de projet / Responsable d équipe', 'Pôle Passe Partout ', 'Angers', 'https://trombi.6tmphp.fr/images/pro/DELCROS-Cedric.jpg', 'https://trombi.6tmphp.fr/images/fun/DELCROS-Cedric.jpg'),
('DELEVALLEZ', 'Zacharie', 'Développeur Junior', 'Pôle Passe Partout ', 'Angers'),
('DURAND', 'Guillaume', 'Développeur', 'Pôle Griffondor ', 'Angers', 'https://trombi.6tmphp.fr/images/pro/DURAND-Guillaume.jpg', 'https://trombi.6tmphp.fr/images/fun/DURAND-Guillaume.jpg'),
('GIRARD', 'Amaury', 'Développeur', 'Pôle Passe Partout ', 'Angers', 'https://trombi.6tmphp.fr/images/pro/GIRARD-Amaury.jpg', 'https://trombi.6tmphp.fr/images/fun/GIRARD-Amaury.jpg'),
('GARRETA ', 'Antoine', 'Développeur Junior ', 'Pôle Passe Partout ', 'Angers', 'https://trombi.6tmphp.fr/images/pro/GARRETA-Antoine.jpg', 'https://trombi.6tmphp.fr/images/fun/GARRETA-Antoine.jpg'),
('GUERBAA', 'Ines', 'Développeur', 'Pôle Griffondor', 'Angers', 'https://trombi.6tmphp.fr/images/pro/GUERBAA-Ines.jpg', 'https://trombi.6tmphp.fr/images/fun/GUERBAA-Ines.jpg'),
('HAMON', 'Kévin', 'Développeur', 'Pôle Passe Partout ', 'Angers'),
('JLAIEL', 'Islem', 'Alternant ', 'Pôle Passe Partout ', 'Angers'),
('KOBAA', 'Marwen', 'Développeur', 'Pôle Griffondor', 'Angers'),
('KULESIAK', 'Laura', 'Chef de projet', 'Pôle Passe Partout ', 'Angers', 'https://trombi.6tmphp.fr/images/pro/KULESIAK-Laura.jpg', 'https://trombi.6tmphp.fr/images/fun/KULESIAK-Laura.jpg'),
('LEBEL', 'Jérémy', 'Lead Developpeur ', 'Pôle Griffondor', 'Angers', 'https://trombi.6tmphp.fr/images/pro/LEBEL-Jeremy.jpg', 'https://trombi.6tmphp.fr/images/fun/LEBEL-Jeremy.jpg'),
('LEMAITRE ', 'Mathieu', 'Chef de projet', 'Pôle Griffondor', 'Angers', 'https://trombi.6tmphp.fr/images/pro/LEMAITRE-Mathieu.jpg', 'https://trombi.6tmphp.fr/images/fun/LEMAITRE-Mathieu.jpg'),
('MAISONNEUVE ', 'Emmanuel', 'Directeur artistique', 'Studio Design', 'Angers', 'https://trombi.6tmphp.fr/images/pro/MAISONNEUVE-Emmanuel.jpg', 'https://trombi.6tmphp.fr/images/fun/MAISONNEUVE-Emmanuel.jpg'),
('MOREAU ', 'Maxime', 'Développeur', 'Pôle Passe Partout ', 'Angers', 'https://trombi.6tmphp.fr/images/pro/MOREAU-Maxime.jpg', 'https://trombi.6tmphp.fr/images/fun/MOREAU-Maxime.jpg'),
('OBLE ', 'Maxime', 'Développeur Junior ', 'Pôle Griffondor', 'Angers', 'https://trombi.6tmphp.fr/images/pro/OBLE-Maxime.jpg', 'https://trombi.6tmphp.fr/images/fun/OBLE-Maxime.jpg'),
('PEAN ', 'Emilien', 'Responsable d équipe', 'Pôle Griffondor', 'Angers', 'https://trombi.6tmphp.fr/images/pro/PEAN-Emilien.jpg', 'https://trombi.6tmphp.fr/images/fun/PEAN-Emilien.jpg'),
('BENSI', 'Louis', 'Développeur Front ', 'Studio Design', 'Rennes'),
('DOLLO', 'Vincent', 'Développeur Mobile', 'Team Dev', 'Rennes'),
('LANSONNEUR', 'Thomas', 'UX/UI Designer ', 'Studio Design', 'Rennes'),
('LE GOFF ', 'Jean-Marie', 'Coordinateur de projets ', 'Team Dev', 'Rennes'),
('LE MEE ', 'Antonin', 'Développeur', 'Team Dev', 'Rennes'),
('SACHET', 'Mathieu', 'Lead Developpeur ', 'Team Dev', 'Rennes'),
('TAILLAND ', 'Gaelle', 'Cheffe de projet', 'Team Dev', 'Rennes');
    END IF;

    (SELECT * FROM information_schema.tables
                   WHERE table_schema = 'trombiDb'
                   AND table_name = 'users') THEN
        CREATE TABLE trombiDb.users (
            id INT NOT NULL AUTO_INCREMENT,
            username VARCHAR(255) NOT NULL,
            password VARCHAR(255) NOT NULL,
            PRIMARY KEY (id)
        );

INSERT INTO users (username, password)
VALUES
('admin', 'admin');
    END IF;

END;
$$ LANGUAGE plpgsql;


CALL InitializeDatabase();
