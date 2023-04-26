import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { User, UserType } from '@entities/user.entity'; 
import { CreateUserInput } from '../dtos/input/create-user.inputs';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';



@Injectable()
export class UserService {
  constructor(@InjectRepository(User)private userRepository: Repository<User>,) {}

  async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt();
    return bcrypt.hash(password, salt);
  }
  
  async findOneByEmail(email: string): Promise<User> {
    return this.userRepository.findOne({ where: { email }});
  }

  async delete(id: string): Promise<boolean> {
  const deleted = await this.userRepository.delete(id);
  if (deleted.affected === 0) {
    return false;
  }
  return true;
}

  async createUser(createUserData: CreateUserInput): Promise<User> {
    const { email, password, firstName, lastName, address, type } = createUserData;
    const user = new User();
    user.password = await this.hashPassword(password);
    user.first_name = firstName;
    user.last_name = lastName;
    user.address = address;
    user.user_type = type|| UserType.CUSTOMER;

    const userExist = await this.findOneByEmail(email);
    if (userExist){
      throw new NotFoundException('User is already exist!');
    };

    user.email = email;
    await user.save();
    return user;
  }

  

  async findOneByEmailAndPassword(
    email: string,
    password: string,
  ): Promise<User> {
    return this.userRepository.findOne({ where: { email, password }});
  }

}

