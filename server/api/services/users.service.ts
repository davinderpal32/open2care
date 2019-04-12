import Promise from 'bluebird';
import L from '../../common/logger'

let id = 0;
interface User {
  id: number,
  name: string
};

const users: User[] = [
    { id: id++, name: 'user 0' }, 
    { id: id++, name: 'user 1' }
];

export class UserService {
  getUser(): Promise<User[]> {
    L.info(users, 'fetch all users');
    return Promise.resolve(users);
  } 
  
  addUser(name: string): Promise<User> {
    L.info(`create user with name ${name}`);
    const user: User = {
      id: id++,
      name
    };
    users.push(user)
    return Promise.resolve(user);
  }
}

export default new UserService();