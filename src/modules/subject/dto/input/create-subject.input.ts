import { InputType, Field } from "@nestjs/graphql";
import { IsNotEmpty,IsOptional } from "class-validator";

@InputType()
export class CreateSubjectInput {
    @Field({nullable:true})
    @IsOptional()
    @IsNotEmpty()
    subject_name:string;

    @Field({nullable:true})
    description:string;

    @Field({ nullable: false })
    subject_status: string;
}
