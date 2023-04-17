import { InputType, Field} from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateTodoInput {
  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  @IsNotEmpty()
  dateCreated: Date;

  @Field({ nullable: true })
  dueUpdated: Date;

  @Field({ nullable: true })
  dueDate: Date;

  @Field()
  isCompleted: boolean;
}