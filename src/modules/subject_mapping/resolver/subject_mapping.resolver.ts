import { Resolver,Query, Args, Mutation } from "@nestjs/graphql";
import { SubjectMapOutput } from "../dto/output/subject-map.output";
import { SubjectMappingEntity } from "@entities/subject_mapping.entity";
import { SubjectMapService } from "../service/subject_mapping.service";
import { CreateSubjectMapInput } from "../dto/input/subject-map.input";
import { ValidationPipe } from "@nestjs/common";
import { SubjectMappingMapper } from "../dto/mapper/subject-map.mapper";


@Resolver()
export class SubjectMapResolver{
    constructor(private readonly subjectmapService: SubjectMapService) {}

    @Query(()=>SubjectMapOutput)
    async getSubjectMap(@Args('subjectMapId')subjectmapId:number){
      const ResIDMap = await this.subjectmapService.getsubjectmapId(subjectmapId)
      // console.log ({ResIDMap:ResIDMap})
      return SubjectMappingMapper.map(ResIDMap)
    }
    
    @Mutation(()=>SubjectMapOutput)
    async createSubjectMap(@Args('createSubjectMapInput',new ValidationPipe())createSubjectMapInput:CreateSubjectMapInput):Promise<SubjectMapOutput>{
      console.log({createSubjectMapInput:createSubjectMapInput})
      return await this.subjectmapService.createSubjectMap(createSubjectMapInput)
    }
}