import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserOutput {
  @Field(() => ID, { nullable: true })
  id?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field({ nullable: false, defaultValue: true })
  address?: string;

  @Field({ nullable: true })
  userType?: string;
}