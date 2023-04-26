import { InputType, Field } from "@nestjs/graphql";
import { IsNotEmpty,IsOptional } from "class-validator";

@InputType()
export class CreateSubjectMapInput {

    @Field({ nullable: true })
    userId: string;

    @Field({ nullable: true })
    subjectId: string;
}
