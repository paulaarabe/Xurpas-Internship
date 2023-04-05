import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('todos')
export class TodosEntity  {
  @Field()
  @PrimaryGeneratedColumn('increment') 
  id: number;
  
  @Field()
  @Column({ nullable: true })
  title: string;

  @Field()
  @Column({ default: false })
  completed: boolean;
  
  @Field()
  @Column({ nullable: true })
  description: string;

  @Field()
  @Column({ nullable: false })
  dueDate: Date;
}
