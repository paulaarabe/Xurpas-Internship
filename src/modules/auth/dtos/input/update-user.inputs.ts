import { InputType, Field } from '@nestjs/graphql';
import { UserType } from '../user-type.enum';


@InputType()
export class UpdateUserInput {
  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field({ nullable: true })
  address?: string;

  @Field(() => UserType, { nullable: true })
  userType?: UserType;
}