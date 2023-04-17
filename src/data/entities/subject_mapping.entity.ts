import { SubjectEntity } from './subject.entity';
import { UserEntity } from './user.entity';
import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn,OneToOne,JoinColumn } from 'typeorm';


@ObjectType()
@Entity('subject_mapping')
export class SubjectMappingEntity  {

    @OneToOne(
        () => UserEntity,
        (subject_mapping) => subject_mapping.id,
        { cascade: true },
    )
    @JoinColumn({ name: 'id' })
    user_id: UserEntity;

    @OneToOne(
        () => SubjectEntity,
        (subject_mapping) => subject_mapping.subject_id,
        { cascade: true },
    )
    @JoinColumn({ name: 'subject_id' })
    subject_id: SubjectEntity;


}
