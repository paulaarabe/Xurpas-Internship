import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity('subject')
export class SubjectEntity  {
  @Column({name:'id'})
  @PrimaryGeneratedColumn('increment') 
  id: number;
  
  @Column({name:'subject_name', nullable: true })
  subject_name: string;

  @Column({ name:'description',nullable:true })
  description: string;
  
  @Column({name:'subject_status', nullable: true })
  subject_status: string;
}
