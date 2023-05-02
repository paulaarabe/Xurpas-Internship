import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateTodoInput {
  @Field()
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
