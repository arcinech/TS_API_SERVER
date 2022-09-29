import { UsersRepository } from './users-repository.interface';
import { User } from '../interfaces/user.interface';
import shortid from 'shortid';
import { findOrThrow } from '../utils/findOrThrow';

export class UsersMockRepository implements UsersRepository {
  private users: Array<User> = [];

  addItem(item: User): User {
    item.id = shortid.generate();
    this.users.push(item);
    return item;
  }

  updateItem(id: string, item: User): User {
    this.users = this.users.map(i => {
      if (i.id === id) {
        return {
          ...item,
          id: i.id,
          updatedAt: new Date(),
        };
      }

      return i;
    });

    return this.getElementById(id);
  }

  deleteItem(id: string): boolean {
    this.users = this.users.filter(i => i.id !== id);
    return !this.getElementById(id);
  }

  getElementById(id: string): User {
    return findOrThrow(this.users, i => i.id === id);
  }

  getAllItems(): Array<User> {
    return this.users;
  }

  findUserByFirstName(firstname: string): User {
    return findOrThrow(this.users, i => i.firstname === firstname);
  }
}

export default UsersMockRepository;
