import { table } from "console";
import { type } from "os";
import {  MigrationInterface, QueryRunner, Table, TableIndex,TableForeignKey} from "typeorm"

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
                        name:'user_id',
                        type:'varchar',
                        length:'255',
                        isNullable:false,
                    },
                    {
                        name:'subject_id',
                        type:'varchar',
                        length:'1000',
                        isNullable:false,
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
