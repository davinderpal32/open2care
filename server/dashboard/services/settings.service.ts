const NodeRSA = require('node-rsa');
const Bcrypt = require("bcryptjs");
import { CarecenterServices } from "../../../models";

export class settingsService {
 
      async addservices (data: any){
        try{
          var usersdetail =  await CarecenterServices.findOne({where:{email:data.email, role:'admin'}}).then(project => {
            if(project)
            return project.get();
          });          
            if(usersdetail && Bcrypt.compareSync(data.password, usersdetail.password)){
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

export default new settingsService();