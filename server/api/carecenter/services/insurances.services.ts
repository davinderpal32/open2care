import { CarecenterTypes } from "../../../../models";
const NodeRSA = require('node-rsa');
const key = new NodeRSA({b: 512});
const Bcrypt = require("bcryptjs");
export class InsuranceService {
 
    async get(data: any){
        //create user and return promise
        try{
            var service =  await CarecenterTypes.findAll().then(project => {
                if(project)
                return project;
               });
                let userInfo = {
                    data: service,
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

}

export default new InsuranceService();