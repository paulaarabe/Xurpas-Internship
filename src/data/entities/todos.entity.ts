import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType() 
@Entity('todos')
export class TodosEntity {
  @Field(() => Int) 
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  title: string;

  @Field() 
  @Column()
  description: string;

  @Field()
  @Column()
  dateCreated: Date;

  @Field() 
  @Column()
  dateUpdated: Date;

  @Field() 
  @Column({ default: false })
  isCompleted: boolean;

  @Field()
  @Column({ nullable: true })
  dueDate: Date; 
}
