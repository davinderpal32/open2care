//import Promise from 'bluebird';
import mongoose from "mongoose";
//interfaces
import { IUser } from '../../interfaces/user'; //import IUser
import { IUserModel } from "../../models/users"; //import IUserModel

import { UserSchema } from '../../schemas/user'; //import userSchema
var db = mongoose.connection;
var User: mongoose.Model<IUserModel> = db.model<IUserModel>("User", UserSchema);
import axios from 'axios';
import { getMaxListeners } from "cluster";
const NodeRSA = require('node-rsa');
const key = new NodeRSA({b: 512});
const Bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");

export class AuthService {
 
    async careCenterRegister(data: any){
        data.role = "carecenter";
        let user: IUser = data;
        //create user and return promise
        try{
            var response = await User.findOne({ email: data.email });
            if(response){
                let response = {
                    data: '',
                    error: "Email already exists.",
                }
                return Promise.resolve(response);
            }
                var users =  await new User(user).save();
                var userToken = await axios.post('https://dev-680f7trh.auth0.com/oauth/token', {
                    headers: { 'content-type': 'application/json' },
                    client_id:"3CV6uO45d6WYrG2IJiSkan674GSIfouV",
                    client_secret:"V9OMLXiwrwo2mDy-_FW0K1ia5_LNnjG-g565nRtQEsq7QyOdY9SsHMS03eLvxM4d",
                    audience:"https://dev-680f7trh.auth0.com/api/v2/",
                    grant_type:"client_credentials",
                    sub: users.id 
                })
                .then(function (response) {
                    users['token'] = response.data.access_token;
                    return Promise.resolve(response.data.access_token);
                });

                let userInfo = {
                    data: users,
                    token: userToken,
                    error: null
                }
                return userInfo;
            }
            catch(error) {
                console.log(error);
                
                let response = {
                    data: '',
                    error: error.message,
                }
                return Promise.resolve(response);
            }
      }

      async login (data: any){
        let user: IUser = data;
        try{
            const text = 'Hello RSA!';
            const encrypted = key.encrypt(text, 'base64');
            console.log('encrypted: ', encrypted);
            const decrypted = key.decrypt(encrypted, 'utf8');
            console.log('decrypted: ', decrypted);
            var usersdetail =  await User.findOne({'email':data.email,'role':data.role});
            if(usersdetail && Bcrypt.compareSync(data.password, usersdetail.password)){
                var userToken = await axios.post('https://dev-680f7trh.auth0.com/oauth/token', {
                    headers: { 'content-type': 'application/json' },
                    client_id:"3CV6uO45d6WYrG2IJiSkan674GSIfouV",
                    client_secret:"V9OMLXiwrwo2mDy-_FW0K1ia5_LNnjG-g565nRtQEsq7QyOdY9SsHMS03eLvxM4d",
                    audience:"https://dev-680f7trh.auth0.com/api/v2/",
                    grant_type:"client_credentials",
                    sub: usersdetail.id,
                    exp: 28800
                })
                .then(function (response) {
                    usersdetail['token'] = response.data.access_token;
                    return Promise.resolve(response.data.access_token);
                });

                let userInfo = {
                    data: usersdetail,
                    token: userToken,
                    error: null
                }
                return userInfo;
            }else{
                let response = {
                    data: '',
                    error: "wrong email or password.",
                }
                return Promise.resolve(response);
            }

        }
        catch(error) {
            let response = {
                data: '',
                error: error.message,
            }
            return Promise.resolve(response);
        }
      }

      async forgetPassword (data: any){
        //let user: IUser = email;
        try{
            var usersdetail =  await User.findOne({'email':data.email});
            if(usersdetail){
                var token = key.encrypt(data.email, 'base64');
                let transporter = nodemailer.createTransport({
                    host: 'smtp.gmail.com',
                    port: 465,
                    secure: true, // true for 465, false for other ports
                    auth: {
                      user: 'osvinphp@gmail.com', // generated ethereal user
                      pass: 'Ukr@inDev' // generated ethereal password
                    }
                  });
                
                  // send mail with defined transport object
                  let info = await transporter.sendMail({
                    from: '"Open2Care" <foo@example.com>', // sender address
                    to: "osvinphp@gmail.com", // list of receivers
                    subject: "Forget Password (Open2Care)", // Subject line
                    text: "Hello world?", // plain text body
                    html: "<b>"+data.url+'/reset/'+token+"</b>" // html body
                  });
                  let userInfo = {
                    data: "",
                    message: "Check your mail to reset password.",
                    error: null
                }
                return userInfo;
            }else{
                let response = {
                    data: '',
                    error: "Email doesn't exists.",
                }
                return Promise.resolve(response);
            }
        }
        catch(error) {
            let response = {
                data: '',
                error: error.message,
            }
            return Promise.resolve(response);
        }
      }

      async resetPassword (data: any){
        try{
            // var usersdetail =  await User.findOne({'email':data.email});
            console.log(data);
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

export default new AuthService();