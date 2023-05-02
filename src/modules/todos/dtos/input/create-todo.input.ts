import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateTodoInput {
  @Field()
  @IsNotEmpty()
  title: string;

  @Field({ nullable: true })
  description: string;

  @Field({ nullable: true })
  dueDate: Date;

  @Field()
  isCompleted: boolean;
}
