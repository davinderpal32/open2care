const NodeRSA = require('node-rsa');
const Bcrypt = require("bcryptjs");
import { CarecenterTypes,InsuranceTypes } from "../../../models";

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
            var success =  await CarecenterTypes.create(data); 
                         // insert carecenter data
            let response = {
                data: success,
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

      async listtype (){
        try{
             var data1 = await CarecenterTypes.findAll().then(project => {
                if(project)
                return project;
               });
            let response = {
                data: data1,
                message: "",
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

      async edittype (id : number){
        try{
             var data1 = await CarecenterTypes.findOne({where:{'id':id}}).then(project => {
                if(project)
                return project;
               });
            let response = {
                data: data1,
                message: "",
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


      async updatetype (data : any){
        try{
            var caretype =  await CarecenterTypes.update({ typeName: data.typename },{where:{'id':data.id}}).then(centerTypes => {
                if(centerTypes)
                return centerTypes;
               });
            let response = {
                data: caretype,
                message: "Successfully Updated",
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

      async deletetype (id : number){
        try{
            var caretype =  CarecenterTypes.findOne({where:{'id':id}}).then(deletetype => {
                return deletetype.destroy();
              }).then(() => {
              })
            let response = {
                data: caretype,
                message: "Successfully Deleted",
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


      async addinsurance (data: any){
        try{
            // get result if email already exists
            var responses = await InsuranceTypes.count({where:{ name: data.name }},{ plain: true }).then( (result) => {return(result)  } );
            if(responses > 0) {                
                let response = {
                    data: '',
                    message: "Insurance Name is already exists.",
                    error: true
                }
                return Promise.resolve(response);
            }
            var success =  await InsuranceTypes.create(data); 
            let response = {
                data: success,
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

      async listinsurance (){
        try{
             var data1 = await InsuranceTypes.findAll().then(project => {
                if(project)
                return project;
               });
            let response = {
                data: data1,
                message: "",
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

      async editinsurance (id : number){
        try{
             var data1 = await InsuranceTypes.findOne({where:{'id':id}}).then(project => {
                if(project)
                return project;
               });
            let response = {
                data: data1,
                message: "",
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


      async updateinsurance (data : any){
        try{
            var caretype =  await InsuranceTypes.update({ typeName: data.typename },{where:{'id':data.id}}).then(centerTypes => {
                if(centerTypes)
                return centerTypes;
               });
            let response = {
                data: caretype,
                message: "Successfully Updated",
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

      async deleteinsurance (id : number){
        try{
            var caretype =  InsuranceTypes.findOne({where:{'id':id}}).then(deletetype => {
                return deletetype.destroy();
              }).then(() => {
              })
            let response = {
                data: caretype,
                message: "Successfully Deleted",
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