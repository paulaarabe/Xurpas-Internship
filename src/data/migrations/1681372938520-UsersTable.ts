import { MigrationInterface,  QueryRunner, Table, TableIndex } from "typeorm"

export class UsersTable1681372938520 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'users',
              columns: [
                {
                  name: 'id',
                  type: 'uuid',
                  isPrimary: true,
                  isUnique: true,
                  generationStrategy: 'uuid',
                  isGenerated: true,
                },
                {
                  name: 'email',
                  type: 'varchar',
                  length: '255',
                  isNullable: false,
                  isUnique: true,
                },
                {
                  name: 'password',
                  type: 'varchar',
                  length: '255',
                  isNullable: false,
                },
                {
                  name: 'user_type',
                  type: 'varchar',
                  length: '255',
                  isNullable: false,
                },
                {
                  name: 'first_name',
                  type: 'varchar',
                  length: '255',
                  isNullable: false,
                },
                {
                  name: 'last_name',
                  type: 'varchar',
                  length: '255',
                  isNullable: false,
                },
                {
                  name: 'address',
                  type: 'varchar',
                  length: '255',
                  isNullable: false,
                },
              ],
            }),
          );
      
          await queryRunner.createIndex(
            'users',
            new TableIndex({
              name: 'IDX_USERS_TABLE',
              columnNames: ['id'],
            }),
          );
    }
    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropIndex('users','IDX_USERS_TABLE');
      await queryRunner.dropTable('users');
    }
}
