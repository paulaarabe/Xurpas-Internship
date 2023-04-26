import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty } from 'class-validator';

@InputType()
export class GetUserByEmailDto {
  @Field()
  @IsEmail()
  email: string;
}