import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsUUID } from 'class-validator';

@InputType()
export class UpdateUserInput {

  @IsUUID()
  @Field({ nullable: true })
  id?: string;

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
  userType?: string;
}