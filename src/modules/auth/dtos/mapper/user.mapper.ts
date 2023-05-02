import { User } from '@entities/user.entity'; 
import { UserOutput } from '../output/update-user.output'; 

export class UserMapper {
  static map(user: User): UserOutput {
    if (!user) return undefined;

    return {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      address: user.address,
      userType: user.userType,
    };
  }

  static mapArray(users: User[]): UserOutput[] {
    if (!users || users.length === 0) return [];
    return users.map((user) => this.map(user));
  }
}