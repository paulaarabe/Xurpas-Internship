import { InputType, Field } from "@nestjs/graphql";
import { IsNotEmpty, IsNumber, IsOptional, IsUUID, isUUID } from "class-validator";

@InputType()
export class CreateSubjectMapInput {
  @Field({ nullable: true })
  @IsUUID()
  userId?: string;

  @Field(() => Number, { nullable: true })
  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  subjectId?: number;

}