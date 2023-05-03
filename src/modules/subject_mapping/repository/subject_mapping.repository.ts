import { Injectable } from "@nestjs/common/decorators/core/injectable.decorator";
import { Repository, DataSource } from "typeorm";
import { SubjectMappingEntity } from "@entities/subject_mapping.entity";

@Injectable()
export class SubjectMapRepository extends Repository<SubjectMappingEntity> {
   
    constructor(private readonly dataSource: DataSource) {
        super(SubjectMappingEntity, dataSource.createEntityManager());
    }

    async findOneById(id: number): Promise<SubjectMappingEntity> {
        return super.findOne({ where: { id },relations:{subject:true} });
      }
    
      async findAll(): Promise<SubjectMappingEntity[]> {
        return this.find();
      }

}