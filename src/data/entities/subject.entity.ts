import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity('subject')
export class SubjectEntity  {
  @Column({name:'id'})
  @PrimaryGeneratedColumn('increment') 
  id: number;
  
  @Column({name:'subjectName', nullable: true })
  subjectName: string;

  @Column({ name:'description',nullable:true })
  description: string;
  
  @Column({name:'subjectStatus', nullable: true })
  subjectStatus: string;
}
