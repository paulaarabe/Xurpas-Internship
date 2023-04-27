import { InputType, Field } from "@nestjs/graphql";
import { IsNotEmpty, IsNumber, IsOptional } from "class-validator";

@InputType()
export class CreateSubjectMapInput {
  @Field(() => Number, { nullable: true })
  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  subjectId?: number;

}