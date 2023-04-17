import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@ObjectType()
@Entity('subject')
export class SubjectEntity  {
  @Field()
  @PrimaryGeneratedColumn('increment') 
  subject_id: number;
  
  @Field()
  @Column({ nullable: true })
  subject_name: string;

  @Field()
  @Column({ default: false })
  description: string;
  
  @Field()
  @Column({ nullable: true })
  subject_status: string;
}
