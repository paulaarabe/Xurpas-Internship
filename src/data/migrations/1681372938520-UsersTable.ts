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
                  name: 'title',
                  type: 'varchar',
                  length: '255',
                  isNullable: false,
                },
                {
                  name: 'description',
                  type: 'varchar',
                  length: '1000',
                  isNullable: true,
                },
                {
                    name: 'completed',
                    type: 'boolean',
                    default: false,
                    isNullable: false,
                  },
              
              ],
            }),
          );
      
          await queryRunner.createIndex(
            'todos',
            new TableIndex({
              name: 'IDX_TODOS_TABLE',
              columnNames: ['id'],
            }),
          );
      
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
