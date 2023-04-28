import { InputType, Field } from "@nestjs/graphql";
import { IsNotEmpty, IsNumber, IsOptional, isUUID } from "class-validator";

@InputType()
export class CreateSubjectMapInput {
  // @Field(() => Number, { nullable: true })
  // @IsOptional()
  // @IsNotEmpty()
  // @IsNumber()
  // userId?: string;

  @Field(() => Number, { nullable: true })
  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  subjectId?: number;

}