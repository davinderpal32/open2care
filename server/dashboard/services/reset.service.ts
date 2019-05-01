const Bcrypt = require("bcryptjs");
import { Users } from "../../../models";
var jwt = require('jsonwebtoken');

export class resetService {
 
      async reset (data: any){
        try{
           let token = jwt.verify(data.token, 'secret');
          var usersdetail =  await Users.findOne({where:{id:token.data}}).then(project => {
            if(project)
            return project.get();
          });          
            if(usersdetail){
                
                let userInfo = {
                    data: usersdetail,
                    message: "Data found.",
                    error: false
                }
                return userInfo;
            }else{
                let response = {
                    data: '',
                    message: "This link is expired.",
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

export default new resetService();