import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1769043315320 implements MigrationInterface {
    name = 'Init1769043315320'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`skill_categories\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`order\` int NOT NULL DEFAULT '0', \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_a99e73db7d2fec4b5ce365029d\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`projects\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(255) NOT NULL, \`description\` text NULL, \`image\` varchar(255) NULL, \`githubUrl\` varchar(255) NULL, \`demoUrl\` varchar(255) NULL, \`featured\` tinyint NOT NULL DEFAULT 0, \`order\` int NOT NULL DEFAULT '0', \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`project_skills\` (\`id\` int NOT NULL AUTO_INCREMENT, \`projectId\` int NULL, \`skillId\` int NULL, UNIQUE INDEX \`IDX_191b202fe8fdcacf4b353fe2ae\` (\`projectId\`, \`skillId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`skills\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`level\` int NULL, \`icon\` varchar(255) NULL, \`order\` int NOT NULL DEFAULT '0', \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`categoryId\` int NULL, UNIQUE INDEX \`IDX_9fb0a6844ed322a479af64b307\` (\`name\`, \`categoryId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`home\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(255) NOT NULL, \`subtitle\` varchar(255) NOT NULL, \`profileImage\` varchar(255) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`education\` (\`id\` int NOT NULL AUTO_INCREMENT, \`institution\` varchar(255) NOT NULL, \`degree\` varchar(255) NOT NULL, \`fieldOfStudy\` varchar(255) NOT NULL, \`startDate\` datetime NOT NULL, \`endDate\` datetime NULL, \`description\` text NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`contact\` (\`id\` int NOT NULL AUTO_INCREMENT, \`email\` varchar(255) NOT NULL, \`phone\` varchar(255) NULL, \`githubUrl\` varchar(255) NULL, \`linkedinUrl\` varchar(255) NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`about\` (\`id\` int NOT NULL AUTO_INCREMENT, \`description\` text NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`project_skills\` ADD CONSTRAINT \`FK_8cbc0f1e52a4bfaf783108f99c4\` FOREIGN KEY (\`projectId\`) REFERENCES \`projects\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`project_skills\` ADD CONSTRAINT \`FK_a60e9e349e2e6cbe2cf73b1fbda\` FOREIGN KEY (\`skillId\`) REFERENCES \`skills\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`skills\` ADD CONSTRAINT \`FK_06d267f85858229c10a01a08ad7\` FOREIGN KEY (\`categoryId\`) REFERENCES \`skill_categories\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`skills\` DROP FOREIGN KEY \`FK_06d267f85858229c10a01a08ad7\``);
        await queryRunner.query(`ALTER TABLE \`project_skills\` DROP FOREIGN KEY \`FK_a60e9e349e2e6cbe2cf73b1fbda\``);
        await queryRunner.query(`ALTER TABLE \`project_skills\` DROP FOREIGN KEY \`FK_8cbc0f1e52a4bfaf783108f99c4\``);
        await queryRunner.query(`DROP TABLE \`about\``);
        await queryRunner.query(`DROP TABLE \`contact\``);
        await queryRunner.query(`DROP TABLE \`education\``);
        await queryRunner.query(`DROP TABLE \`home\``);
        await queryRunner.query(`DROP INDEX \`IDX_9fb0a6844ed322a479af64b307\` ON \`skills\``);
        await queryRunner.query(`DROP TABLE \`skills\``);
        await queryRunner.query(`DROP INDEX \`IDX_191b202fe8fdcacf4b353fe2ae\` ON \`project_skills\``);
        await queryRunner.query(`DROP TABLE \`project_skills\``);
        await queryRunner.query(`DROP TABLE \`projects\``);
        await queryRunner.query(`DROP INDEX \`IDX_a99e73db7d2fec4b5ce365029d\` ON \`skill_categories\``);
        await queryRunner.query(`DROP TABLE \`skill_categories\``);
    }

}
