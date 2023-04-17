import { InputType, Field } from '@nestjs/graphql';
import { IsOptional, IsNotEmpty } from 'class-validator';

@InputType()
export class UpdateTodoInput {
  @Field({ nullable: true })
  @IsOptional()
  @IsNotEmpty()
  title?: string;

  @Field({ nullable: true })
  @IsOptional()
  description?: string;

  @Field({ nullable: true })
  dueDate?: Date;

  @Field({ nullable: false })
  @IsOptional()
  completed?: boolean;
}

