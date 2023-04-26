import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class TodosOutput{
    
  @Field(() => ID, { nullable: true })
  id?: number;

  @Field({ nullable: false })
  title: string;

  @Field({ nullable: true })
  description: string;

  @Field({ nullable: false, defaultValue: false })
  completed: boolean;
  
  @Field({ nullable: false })
  createdAt: Date;
  
  @Field({ nullable: false })
  updatedAt: Date;

  @Field({ nullable: false, defaultValue: false })
  isCompleted: boolean;

}