import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class SubjectMapOutput{
    
  @Field(() => ID, { nullable: true })
  id: number;

  @Field({ nullable: false })
  userId: string;

  @Field({ nullable: false})
  subjectId: string;

}