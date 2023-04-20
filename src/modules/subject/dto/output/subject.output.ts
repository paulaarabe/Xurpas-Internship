import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class SubjectOutput{
    
  @Field(() => ID, { nullable: true })
  id: number;

  @Field({ nullable: false })
  subject_name: string;

  @Field({ nullable: true })
  description: string;

  @Field({ nullable: false, defaultValue: false })
  subject_status: string;

}