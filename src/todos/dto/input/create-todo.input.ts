import { InputType, Field} from '@nestjs/graphql';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class CreateTodoInput {
  @Field({ nullable: true })
  @IsOptional()
  @IsNotEmpty()
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: false})
  dateCreated: Date;

  @Field({ nullable: true })
  dueUpdated: Date;

  @Field({ nullable: true })
  dueDate?: Date;

  @Field({ nullable: false })
  completed?: boolean;
}
