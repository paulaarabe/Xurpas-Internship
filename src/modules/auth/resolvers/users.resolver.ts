import { Resolver, Mutation, Args, Query, ID } from '@nestjs/graphql';
import { User, UserType } from '@entities/user.entity'; 
import { CreateUserInput } from '../dtos/input/create-user.inputs'; 
import { UserService } from '../services/users.service'; 
import { InternalServerErrorException, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';


@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService,) {}

  @Mutation(() => User)
  async registerUser(
    @Args('createUserData') createUserData: CreateUserInput,
  ): Promise<User> {
    const createdUser = await this.userService.createUser(createUserData);
    return createdUser;
  }

  @Mutation(() => Boolean)
  async deleteUser(@Args('id', { type: () => ID }) id: string) {
    try {
      const deleted = await this.userService.delete(id);
      if (deleted) {
        return true;
      }
      throw new NotFoundException(`User with ID ${id} not found`);
    } catch (err) {
      throw new InternalServerErrorException(err.message);
    }
  }

  @Query(() => UserType)
  async loginUser(
    @Args('email') email: string,
    @Args('password') password: string,
  ): Promise<UserType> {
    const user = await this.userService.findOneByEmail(email);
    if (!user) {
      throw new NotFoundException('Invalid email or password');
    }
    const isPasswordMatched = await bcrypt.compare(password, user.password);
    if (!isPasswordMatched) {
      throw new NotFoundException('Invalid email or password');
    }
    return user.user_type;
  }

  
}
