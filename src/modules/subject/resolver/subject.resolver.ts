import { SubjectEntity } from "@entities/subject.entity";

@Resolver()
export class SubjectResolver{
    subjectRepository: any;
    constructor(private readonly subjectService: SubjectService) {}
    @Query(()=> SubjectOutput)

    async getTodos(): Promise<SubjectEntity[]> {
        return this.subjectRepository.find();
      }
    
}