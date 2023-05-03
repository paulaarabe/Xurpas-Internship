import { InputType, Field } from '@nestjs/graphql';
import { IsEmail } from 'class-validator';

@InputType()
export class GetUserByEmailDto {
  @Field()
  @IsEmail()
  email: string;
}