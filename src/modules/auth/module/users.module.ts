import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@entities/user.entity'; 
import { UserService } from '../services/users.service'; 
import { UserResolver } from '../resolvers/users.resolver'; 
import { UserRepository } from '../repositories/users.repository';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserService, UserResolver, UserRepository],
})
export class UserModule {}
