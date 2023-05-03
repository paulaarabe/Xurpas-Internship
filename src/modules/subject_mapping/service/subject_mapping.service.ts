import { Injectable } from "@nestjs/common/decorators/core/injectable.decorator";
import { SubjectMappingEntity } from "@entities/subject_mapping.entity";
import { SubjectMapRepository } from "../repository/subject_mapping.repository";
import { CreateSubjectMapInput } from "../dto/input/subject-map.input";

@Injectable()
export class SubjectMapService{
    constructor(private readonly subjectRepository: SubjectMapRepository){}

    async createSubjectMap(createSubjectMapInput: CreateSubjectMapInput): Promise<SubjectMappingEntity> {
        return await this.subjectRepository.save(createSubjectMapInput);
      }

    async getsubjectmapId(subjectmapId:number): Promise<SubjectMappingEntity>{
         const IDmap = await this.subjectRepository.findOneById( subjectmapId );
        console.log({IDmap:IDmap})
        return IDmap
    }



}