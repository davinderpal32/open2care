//import Promise from 'bluebird';
import mongoose from "mongoose";
//interfaces
import { IUser } from '../../interfaces/user'; //import IUser
import { IUserModel } from "../../models/users"; //import IUserModel

import { UserSchema } from '../../schemas/user'; //import userSchema
var db = mongoose.connection;
var User: mongoose.Model<IUserModel> = db.model<IUserModel>("User", UserSchema);
import axios from 'axios';
const NodeRSA = require('node-rsa');
const key = new NodeRSA({b: 512});
var filter = require('array.filter');
const Bcrypt = require("bcryptjs");

export class loginService {
 
      async login (data: any){
        let user: IUser = data;
        try{
            
        }
        catch(error) {
            let response = {
                data: '',
                error: error.message,
            }
            return Promise.resolve(response);
        }
      }
}

export default new loginService();