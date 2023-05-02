import { Field, InputType } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';

@InputType()
export class UpdateTodoInput {
  @Field({ nullable: false })
  title?: string;

  @Field({ nullable: true })
  @IsOptional()
  description?: string;

  @Field({ nullable: true })
  dueDate?: Date;

  @Field({ nullable: false })
  isCompleted?: boolean;
}

