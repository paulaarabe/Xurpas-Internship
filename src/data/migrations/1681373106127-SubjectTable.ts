import { table } from "console";
import { type } from "os";
import {  MigrationInterface, QueryRunner, Table, TableIndex} from "typeorm"

export class SubjectTable1681373106127 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name : 'subject',
                columns: [
                    {
                        name:'id',
                        type:'int',
                        isPrimary:true,
                        generationStrategy: 'increment',
                        isGenerated: true,
                    },
                    {
                        name:'subject_name',
                        type:'varchar',
                        length:'255',
                        isNullable:false,
                    },
                    {
                        name:'description',
                        type:'varchar',
                        length:'1000',
                        isNullable:false,
                    },
                    {
                        name:'subject_status',
                        type:'varchar',
                        length:'255',
                        isNullable:false,
                    },
                ],
            }),
        );
        
        await queryRunner.createIndex(
            'subject',
            new TableIndex({
              name: 'IDX_SUBJECT_TABLE',
              columnNames: ['id'],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropIndex('subject','IDX_SUBJECT_TABLE');
        await queryRunner.dropTable('subject');
    }


}
