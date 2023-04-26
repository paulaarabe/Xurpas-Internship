import { Resolver,Query, Args, Mutation } from "@nestjs/graphql";
import { SubjectOutput } from "../dto/output/subject.output";
import { SubjectEntity } from "@entities/subject.entity";
import { SubjectService } from "../service/subject.service";
import { CreateSubjectInput } from "../dto/input/create-subject.input";
import { UpdateSubjectInput } from "../dto/input/update-subject.input";

@Resolver()
export class SubjectResolver{
    constructor(private readonly subjectService: SubjectService) {}
    
    @Query(()=>SubjectOutput)
    async getSubject(@Args('subjectId')subjectId:number){
      return await this.subjectService.getSubjectsBySubjectId(subjectId)
    }

    @Query(()=>SubjectOutput)
    async getallSubject(){
      return await this.subjectService.getAllSubjects()
    }

    @Mutation(()=>SubjectOutput)
    async createSubject(@Args('createSubjectInput')createSubjectInput:CreateSubjectInput){
      return await this.subjectService.create(createSubjectInput)
    }

    @Mutation(()=>SubjectOutput)
    async updateSubject(@Args('subjectId')subjectId: number,@Args('updateSubjectInput')updateSubjectInput:UpdateSubjectInput){
      return await this.subjectService.update(subjectId,updateSubjectInput)
    }

    @Mutation(()=>SubjectOutput)
    async removeSubject(@Args('subjectId')subjectId: number){
      return await this.subjectService.remove(subjectId)
    }

}