import { Resolver,Query } from "@nestjs/graphql";
import { SubjectOutput } from "../dto/output/subject.output";
import { SubjectEntity } from "@entities/subject.entity";
import { SubjectService } from "../service/subject.service";

@Resolver()
export class SubjectResolver{
    subjectRepository: any;
    constructor(private readonly subjectService: SubjectService) {}
    @Query(()=> SubjectOutput)

    async getSubject(): Promise<SubjectEntity[]> {
        return this.subjectRepository.find();
    }
    async getTodosBySubjectId(userId: number): Promise<SubjectEntity[]> {
      return this.subjectRepository.find({ where: { userId } });
    }
  
    async getTodosByTitle(title: string): Promise<SubjectEntity[]> {
      return this.subjectRepository.find({ where: { title } });
    }
  
    async getCompletedSubects(): Promise<SubjectEntity[]> {
      return this.subjectRepository.find({ where: { completed: true } });
    }
  
    async getPendingSubects(): Promise<SubjectEntity[]> {
      return this.subjectRepository.find({ where: { completed: false } });
    }
      
}