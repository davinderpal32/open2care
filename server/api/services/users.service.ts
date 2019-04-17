import Promise from 'bluebird';
import L from '../../common/logger'
import mongoose from "mongoose";
//interfaces
import { IUser } from "../../interfaces/user"; //import IUser

//models
import { IModel } from "../../models/model"; //import IModel
import { IUserModel } from "../../models/users"; //import IUserModel

//schemas
import { UserSchema } from "../../schemas/user"; //import userSchema
var db = mongoose.connection;
var User: mongoose.Model<IUserModel> = db.model<IUserModel>("User", UserSchema);
let id = 0;
interface Users {
  id: number,
  name: string
};

const users: Users[] = [
    { id: id++, name: 'Pooja',  },
    { id: id++, name: 'Renu' }
];

export class UsersService {
  all(): Promise<Users[]> {
    console.log('dbconnect:',db);
    L.info(users, 'fetch all users');
    return Promise.resolve(users);
  }

  byId(id: number): Promise<Users> {
    L.info(`fetch user with id ${id}`);
    return this.all().then(r => r[id])
  }

  create(name: string): Promise<Users> {
    L.info(`create user with name ${name}`);
    const user: Users = {
      id: id++,
      name
    };
    users.push(user)
    return Promise.resolve(user);
  }
  delete(id: number): Promise<Users> {
    L.info(`delete user with id ${id}`);
    const user: Users = {
      id: id++,
      name
    };
    users.push(user)
    return Promise.resolve(user);
  }
}

export default new UsersService();
