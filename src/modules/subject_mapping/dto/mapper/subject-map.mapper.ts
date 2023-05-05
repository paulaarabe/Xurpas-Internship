import { User } from "@entities/user.entity";
import { SubjectMappingEntity } from "@entities/subject_mapping.entity";
import { SubjectMapOutput } from "../output/subject-map.output";

export class SubjectMappingMapper {
    static map(subjectMappingEntity:SubjectMappingEntity):SubjectMapOutput{
        console.log ({subjectMappingEntity:subjectMappingEntity})
        if (!subjectMappingEntity) return undefined;
        

        return{
            id: subjectMappingEntity.id,
            userId: subjectMappingEntity.userId,
            userName:subjectMappingEntity.user.lastName,
            subjectId:subjectMappingEntity.subjectId,
            subjectName:subjectMappingEntity.subject.subjectName,
        }
    }
};