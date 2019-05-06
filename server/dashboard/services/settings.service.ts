const NodeRSA = require('node-rsa');
const Bcrypt = require("bcryptjs");
import { CarecenterTypes } from "../../../models";

export class settingsService {
 
      async addtype (data: any){
        try{
            // get result if email already exists
            var responses = await CarecenterTypes.count({where:{ typeName: data.typeName }},{ plain: true }).then( (result) => {return(result)  } );
            if(responses > 0) {                
                let response = {
                    data: '',
                    message: "Type Name is already exists.",
                    error: true
                }
                return Promise.resolve(response);
            }
            var userInfo =  await CarecenterTypes.create(data);               // insert carecenter data
            let response = {
                data: '',
                message: "Successfully Inserted",
                error: false
            }
            return response;
        }catch(error) {
            let response = {
                data: '',
                message: error.message,
                error: true
            }
            return Promise.resolve(response);
        }
      }

      async listtype (data: any){
        try{
            CarecenterTypes.findOne()
            let response = {
                data: CarecenterTypes,
                message: "Successfully Inserted",
                error: false
            }
            return response;
        }catch(error) {
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