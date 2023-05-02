import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateUserInput {

  @IsString()
  @Field(() => String)
  id: string;

  @IsEmail()
  @IsNotEmpty()
  @Field(() => String)
  email: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  password: string;


  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  firstName: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  lastName: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  address: string;

  @Field()
  type: string;
}
