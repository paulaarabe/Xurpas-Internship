import { Injectable } from "@nestjs/common/decorators/core/injectable.decorator";
import { SubjectMappingEntity } from "@entities/subject_mapping.entity";
import { SubjectMapRepository } from "../repository/subject_mapping.repository";
import { CreateSubjectMapInput } from "../dto/input/subject-map.input";

@Injectable()
export class SubjectMapService{
    constructor(private readonly subjectRepository: SubjectMapRepository){}

    async create(createSubjectMapInput: CreateSubjectMapInput): Promise<SubjectMappingEntity> {
        return await this.subjectRepository.save(createSubjectMapInput);
      }

    async getsubjectmapId(subjectmapId:number): Promise<SubjectMappingEntity>{
        return this.subjectRepository.findOneById( subjectmapId );
    }
}