import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';



@InputType()
export class UpdateUserInput {
  @IsString()
  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @IsString()
  @Field({ nullable: true })
  address?: string;

  @IsString()
  @Field({ nullable: true })
  user_type?: string;
}