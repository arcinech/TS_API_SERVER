import { BaseRepository } from './base-repository.interface';
import { User } from '../interfaces/user.interface';

export interface UsersRepository extends BaseRepository<User> {
  findUserByFirstName(firstName: string): User;
}
