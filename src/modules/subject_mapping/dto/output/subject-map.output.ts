import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class SubjectMapOutput{
    
  @Field(() => ID, { nullable: true })
  id: number;

  @Field({ nullable: false })
  userName: string;

  @Field({ nullable: false })
  userId: string;

  @Field({ nullable: false})
  subjectName: string;

  @Field({ nullable: false})
  subjectId: number;

}