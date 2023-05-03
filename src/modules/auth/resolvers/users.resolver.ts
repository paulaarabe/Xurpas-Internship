import { InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { Resolver, Mutation, Args, Query, ID } from '@nestjs/graphql';
import { CreateUserInput } from '../dtos/input/create-user.inputs'; 
import { UpdateUserInput } from '../dtos/input/update-user.inputs';
import { UserService } from '../services/users.service'; 
import { UserOutput } from '../dtos/output/update-user.output';
import { UserMapper } from '../dtos/mapper/user.mapper';
import * as bcrypt from 'bcrypt';



@Resolver(()=> UserOutput)
export class UserResolver {
  constructor(private readonly userService: UserService,) {}

  @Mutation(() => UserOutput)
  async registerUser(
    @Args('createUserData') createUserData: CreateUserInput,
  ): Promise<UserOutput> {
    const createdUser = await this.userService.createUser(createUserData);
    return UserMapper.map(createdUser);
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

  @Query(() => UserOutput)
  async loginUser(
    @Args('email') email: string,
    @Args('password') password: string,
  ): Promise<UserOutput> {
    const user = await this.userService.findOneByEmail(email);
    if (!user) {
      throw new NotFoundException('Invalid email or password');
    }
    const isPasswordMatched = await bcrypt.compare(password, user.password);
    if (!isPasswordMatched) {
      throw new NotFoundException('Invalid email or password');
    }
    return new UserOutput;
  }

  @Mutation(() => UserOutput)
  async updateUser(
    @Args('updateUserData') updateUserData: UpdateUserInput,
  ): Promise<UserOutput> {
    return this.userService.updateUser( updateUserData);
  }

}
