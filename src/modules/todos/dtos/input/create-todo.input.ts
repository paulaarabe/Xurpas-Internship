import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateTodoInput {
  @Field()
  @IsNotEmpty()
  title: string;

  @Field({ nullable: true })
  description: string;

  @Field()
  dateCreated: Date;

  @Field({ nullable: true })
  dateUpdated: Date;

  @Field({ nullable: true })
  dueDate: Date;

  @Field()
  isCompleted: boolean;
}
