// import Promise from 'bluebird';
import axios from 'axios';
const NodeRSA = require('node-rsa');
const key = new NodeRSA({b: 512});
var filter = require('array.filter');
const Bcrypt = require("bcryptjs");
import { Users } from "../../../models";

export class loginService {
 
      async login (data: any){
        try{
          var usersdetail =  await Users.findAll({where:{email:data.email, role:'admin'}});
          console.log(usersdetail);
          
            if(usersdetail && Bcrypt.compareSync(data.password, usersdetail.password)){
               console.log(usersdetail);
                //var userToken = await GenerateToken.generate(usersdetail.id);
                let userInfo = {
                    data: usersdetail,
                    message: "Login successfully.",
                    error: false
                }
                return userInfo;
            }else{
                let response = {
                    data: '',
                    message: "wrong email or password.",
                    error: true
                }
                return Promise.resolve(response);
            }
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
}

export default new loginService();