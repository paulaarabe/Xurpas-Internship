import { SubjectEntity } from './subject.entity';
import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn,OneToOne,JoinColumn } from 'typeorm';


@ObjectType()
@Entity('subject_mapping')
export class SubjectMappingEntity  {
 
    @OneToOne(
        () => SubjectEntity,
        (subject_mapping) => subject_mapping.subject_id,
        { cascade: true },
    )
    @JoinColumn({ name: 'subject_id' })
    subject: SubjectEntity;

    /*@OneToOne(
        () => UsersEntity,
        (subject_mapping) => subject_mapping.user_id,
        { cascade: true },
    )
    @JoinColumn({ name: 'user_id' })
    user: UserEntity;*/

    //To Whoever is doing the Users Table, please use the comment block above

}
