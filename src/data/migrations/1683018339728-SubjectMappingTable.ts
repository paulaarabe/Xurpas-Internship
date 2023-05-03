import { MigrationInterface, QueryRunner, Table, TableForeignKey, TableIndex } from "typeorm"

export class SubjectMappingTable1683018339728 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name : 'subject_mapping',
                columns: [
                    {
                        name:'id',
                        type:'int',
                        isPrimary:true,
                        generationStrategy: 'increment',
                        isGenerated: true,
                    },
                    {
                        name:'user_id',
                        type:'uuid',
                        isNullable:false,
                    },
                    {
                        name:'subject_id',
                        type:'int',
                        isNullable:false,
                    },
                ],
            }),
        );
        await queryRunner.createIndex(
            'subject_mapping',
            new TableIndex({
              name: 'IDX_SUBJECT_MAPPING_TABLE',
              columnNames: ['id'],
            }),
        );

        await queryRunner.createForeignKey(
            'subject_mapping',
            new TableForeignKey({
                name: 'FK_USER',
                columnNames: ['user_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'users',
                onDelete: 'cascade',
            }), 
        );

        await queryRunner.createForeignKey(
            'subject_mapping',
            new TableForeignKey({
                name: 'FK_SUBJECT',
                columnNames: ['subject_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'subject',
                onDelete: 'cascade',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('subject_mapping','FK_SUBJECT');
        await queryRunner.dropForeignKey('subject_mapping','FK_USER');
        await queryRunner.dropIndex('subject_mapping','IDX_SUBJECT_MAPPING_TABLE');
        await queryRunner.dropTable('subject_mapping');
    }

}
