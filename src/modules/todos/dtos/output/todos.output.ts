import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class TodosOutput{
    
  @Field(() => ID, { nullable: true })
  id?: number;

  @Field({ nullable: true })
  title: string;

  @Field({ nullable: true })
  description: string;
  
  @Field({ nullable: false })
  dateCreated: Date;
  
  @Field({ nullable: false })
  dateUpdated: Date;

  @Field({ nullable: false, defaultValue: false })
  isCompleted: boolean;

  @Field({ nullable: true })
  dueDate: Date; 
}