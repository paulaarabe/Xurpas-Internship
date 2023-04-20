import { Injectable } from "@nestjs/common";
import { Repository, DataSource } from "typeorm";
import { SubjectEntity } from "@entities/subject.entity";
import { CreateSubjectInput } from "../dto/input/create-subject.input";

@Injectable()
export class SubjectRepository extends Repository<SubjectEntity> {
    createSubject(createSubjectInput: CreateSubjectInput) {
        throw new Error('Method not implemented.');
    }
    findAllSubject(){
        throw new Error('Method not implemented.');
    }
    constructor(private readonly dataSource: DataSource) {
        super(SubjectEntity, dataSource.createEntityManager());
    }

    async findOneById(id: number): Promise<SubjectEntity> {
        return super.findOne({ where: { id } });
      }
    
      async findAll(): Promise<SubjectEntity[]> {
        return this.find();
      }
      
}