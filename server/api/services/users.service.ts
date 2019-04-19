import Promise from 'bluebird';
import mongoose from "mongoose";
//interfaces
import { IUser } from '../../interfaces/user'; //import IUser
import { IUserModel } from "../../models/users"; //import IUserModel

import { UserSchema } from '../../schemas/user'; //import userSchema
var db = mongoose.connection;
var User: mongoose.Model<IUserModel> = db.model<IUserModel>("User", UserSchema);



export class UsersService {
  /*
  * 
  * @ returns object of all user
  * 
  */
  all(): Promise<IUser[]> {
    var users = User.find();
    return Promise.resolve(users);
  }

  /*
  *
  * @param user id
  * @ returns object of user
  * 
  */

  byId(id: number): Promise<IUser> {
    var users = User.findById(id);
    console.log(users);
    return Promise.resolve(users);
  }

  create(data: any): Promise<IUser> {
    console.log(data);
    let user: IUser = data;
    //create user and return promise
    var users =  new User(user).save();
    return Promise.resolve(users);
  }
  delete(id: number): Promise<IUser> {
    var users = User.findByIdAndRemove(id, function(err) {
      if (err) throw err;
    });
    return Promise.resolve(users);
  }
}

export default new UsersService();
