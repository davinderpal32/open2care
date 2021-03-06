import { CarecenterServices } from "../../../../models";
const NodeRSA = require('node-rsa');
const key = new NodeRSA({b: 512});
const Bcrypt = require("bcryptjs");
export class ServiceService {
 
    async get(data: any){
        //get data of Carecenter services against particular type
        try{
            var service =  await CarecenterServices.findAll({where: {carecenterTypeId: data}}).then(project => {
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

export default new ServiceService();