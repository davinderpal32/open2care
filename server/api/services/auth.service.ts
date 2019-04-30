import axios from 'axios';
import { Users } from "../../../models";
import  GenerateToken  from '../../generateToken';
import { getMaxListeners } from "cluster";
const NodeRSA = require('node-rsa');
const key = new NodeRSA({b: 512});
const Bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");

export class AuthService {
 
    async careCenterRegister(data: any){
        data.role = "carecenter";
        //create user and return promise
        try{
            // get result if email already exists
            var responses = await Users.count({where:{ email: data.email }},{ plain: true }).then( (result) => {return(result)  } );
            if(responses > 0) {                
                let response = {
                    data: '',
                    message: "Email already exists.",
                    error: true
                }
                return Promise.resolve(response);
            }
                var users =  await Users.create(data);               // insert carecenter data
                data.centerId = users.id;
                var userToken = await GenerateToken.generate(users.id);        // generate auth token
                let userInfo = {
                    data: users,
                   token: userToken,
                    error: false
                }
                return userInfo;
            }
            catch(error) {
                let response = {
                    data: '',
                    message: error.message,
                    error: true
                }
                return Promise.resolve(response);
            }
      }

      async login (data: any){
        //let user: IUser = data;
        try{
            const text = 'Hello RSA!';
            const encrypted = key.encrypt(text, 'base64');
            console.log('encrypted: ', encrypted);
            const decrypted = key.decrypt(encrypted, 'utf8');
            console.log('decrypted: ', decrypted);
            var usersdetail =  await Users.findOne({'email':data.email,'role':data.role});
            if(usersdetail && Bcrypt.compareSync(data.password, usersdetail.password)){
               
                var userToken = await GenerateToken.generate(usersdetail.id);
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
            var usersdetail =  await Users.findOne({'email':data.email});
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