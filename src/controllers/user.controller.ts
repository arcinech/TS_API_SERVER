import BaseController from './base-controller';
import { User } from '../interfaces/user.interface';
import { UsersRepository } from '../repository/users-repository.interface';

class UserController extends BaseController<User> {
  constructor(private usersRepository: UsersRepository) {
    super(usersRepository);
  }

  findUserByFirstName(firstName: string): User {
    return this.usersRepository.findUserByFirstName(firstName);
  }
}

export default UserController;
