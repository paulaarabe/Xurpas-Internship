import { InputType, Field } from "@nestjs/graphql";
import { IsNotEmpty,IsOptional } from "class-validator";

@InputType()
export class UpdateSubjectInput {
    @Field({nullable:true})
    @IsOptional()
    @IsNotEmpty()
    subjectName:string;

    @Field({nullable:true})
    description:string;

    @Field({ nullable: false })
    subjectStatus: string;
}
