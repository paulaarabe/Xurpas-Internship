import { SubjectEntity } from './subject.entity';
import { UserEntity } from './user.entity';
import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn,OneToOne,JoinColumn,ManyToOne,ManyToMany } from 'typeorm';


@Entity('subject_mapping')
export class SubjectMappingEntity  {
    @Column({name:'id'})
    @PrimaryGeneratedColumn('increment') 
    id: number;

    // @Column({ name: 'user_id' })
    // userId: string;
    // @OneToOne(
    //     () => UserEntity,
    //     (user) => user.id,
    //     { cascade: true },
    // )
    // @JoinColumn({ name: 'user_id' })
    // user: UserEntity;

    @Column({ name: 'subject_id' })
    subjectId: number;
    @OneToOne(
        () => SubjectEntity,
        (subject) => subject.id,
        { cascade: true },
    )
    @JoinColumn({ name: 'subject_id' })
    subject: SubjectEntity;

}
