import { MigrationInterface, QueryRunner, Table, TableIndex } from "typeorm"

export class toDoTable1679473269918 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'todos',
              columns: [
                {
                  name: 'id',
                  type: 'int',
                  isPrimary: true,
                  generationStrategy: 'increment',
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
                  length: '1500',
                  isNullable: true,
                },
                {
                  name: 'dateCreated',
                  type: 'date',
                  isNullable: false,
                },
                {
                  name: 'dateUpdated',
                  type: 'date',
                  isNullable: false,
                },
                {
                  name: 'dueDate',
                  type: 'date',
                  isNullable: false,
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
        await queryRunner.dropIndex('todos','IDX_TODOS_TABLE')
        await queryRunner.dropTable('todos')
    }

}
