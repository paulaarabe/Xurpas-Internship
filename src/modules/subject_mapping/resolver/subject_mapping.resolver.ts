import { Resolver,Query, Args, Mutation } from "@nestjs/graphql";
import { SubjectMapOutput } from "../dto/output/subject-map.output";
import { SubjectMappingEntity } from "@entities/subject_mapping.entity";
import { SubjectMapService } from "../service/subject_mapping.service";
import { CreateSubjectMapInput } from "../dto/input/subject-map.input";
import { ValidationPipe } from "@nestjs/common";

@Resolver()
export class SubjectMapResolver{
    constructor(private readonly subjectmapService: SubjectMapService) {}

    @Query(()=>SubjectMapOutput)
    async getSubjectMap(@Args('subjectId')subjectmapId:number){
      return await this.subjectmapService.getsubjectmapId(subjectmapId)
    }
    
    @Mutation(()=>SubjectMapOutput)
    async createSubjectMap(@Args('createSubjectMapInput',new ValidationPipe())createSubjectMapInput:CreateSubjectMapInput):Promise<SubjectMapOutput>{
      console.log({createSubjectMapInput:createSubjectMapInput})
      return await this.subjectmapService.createSubjectMap(createSubjectMapInput)
    }
}