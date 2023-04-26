import { Repository } from 'typeorm';
import { Injectable } from "@nestjs/common";
import { User, UserType } from '@entities/user.entity';
import { DataSource } from 'typeorm';



@Injectable()
export class UserRepository extends Repository<User> {
  constructor(private readonly dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  async findUserByEmail(email: string): Promise<User> {
    return super.findOne({where: { email }});
  }
  async findOneById(id: string): Promise<User> {
    return super.findOne({ where: { id }});
  }
  

}