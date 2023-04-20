import { Resolver,Query } from "@nestjs/graphql";
import { SubjectOutput } from "../dto/output/subject.output";
import { SubjectEntity } from "@entities/subject.entity";
import { SubjectService } from "../service/subject.service";

@Resolver()
export class SubjectResolver{
    subjectRepository: any;
    constructor(private readonly subjectService: SubjectService) {}
    @Query(()=> SubjectOutput)

    async getTodos(): Promise<SubjectEntity[]> {
        return this.subjectRepository.find();
      }
    
}