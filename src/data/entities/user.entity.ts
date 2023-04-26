import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';
import { ObjectType, Field, ID, registerEnumType, ResolveField } from '@nestjs/graphql';


export enum UserType {
  ADMIN = 'admin',
  CUSTOMER = 'customer',
  AGENT = 'agent',
  USER = "user"
}

registerEnumType(UserType, {
  name: 'UserType',
});

registerEnumType(UserType, { name: 'UserType' });

@Entity({ name: 'users' })
@ObjectType()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @Column()
  @Field()
  email: string;

  @Column()
  password: string;

  @Column()
  @Field()
  first_name: string;

  @Column()
  @Field()
  last_name: string;

  @Column()
  @Field()
  address: string;

  @Column({
    type: 'enum',
    enum: UserType,
    default: UserType.CUSTOMER,
  })
  @Field(() => UserType)
  user_type: UserType;
  

  @ResolveField(() => String)
  fullName(): string {
    return `${this.first_name} ${this.last_name}`;
  }
}
