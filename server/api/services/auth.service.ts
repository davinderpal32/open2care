//import Promise from 'bluebird';
import mongoose from "mongoose";
//interfaces
import { IUser } from '../../interfaces/user'; //import IUser
import { IUserModel } from "../../models/users"; //import IUserModel

import { UserSchema } from '../../schemas/user'; //import userSchema
var db = mongoose.connection;
var User: mongoose.Model<IUserModel> = db.model<IUserModel>("User", UserSchema);
import axios from 'axios';


export class AuthService {
 
    async create(data: any){
        console.log(data);
        let user: IUser = data;
        //create user and return promise
        var users =  await new User(user).save();
        
        var userToken = await axios.post('https://dev-680f7trh.auth0.com/oauth/token', {
            headers: { 'content-type': 'application/json' },
            client_id:"3CV6uO45d6WYrG2IJiSkan674GSIfouV",
            client_secret:"V9OMLXiwrwo2mDy-_FW0K1ia5_LNnjG-g565nRtQEsq7QyOdY9SsHMS03eLvxM4d",
            audience:"https://dev-680f7trh.auth0.com/api/v2/",
            grant_type:"client_credentials"
        })
        .then(function (response) {
            users['token'] = response.data.access_token;
            return Promise.resolve(response.data.access_token);
        })
        .catch(function (error) {
            console.log(error);
            return Promise.reject(error);
        });

        let userInfo = {
            data: users,
            token: userToken
        }
        return userInfo;
      }
}

export default new AuthService();