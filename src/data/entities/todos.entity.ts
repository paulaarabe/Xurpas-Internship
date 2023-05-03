import { ObjectType, Field, Int } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import { title } from 'process';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('todos')
export class TodosEntity {
  @Field(() => Int) 
  @PrimaryGeneratedColumn()
  id: number;

  @Column({name: 'title'})
  @IsNotEmpty()
  title: string;
 
  @Column({ nullable: true, name: 'description' })
  description: string;

  @Column({name: 'date_created'})
  dateCreated: Date;

  @Column({name: 'date_updated'})
  dateUpdated: Date;

  @Column({ default: false, name: 'is_completed' })
  isCompleted: boolean;

  @Column({ nullable: true, name: 'due_date' })
  dueDate: Date; 
}