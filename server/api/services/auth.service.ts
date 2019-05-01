import { Users, MedicalServices , MedicalcenterInfo } from "../../../models";
import  GenerateToken  from '../../generateToken';
import  emailConfig  from '../../emailconfig';
const NodeRSA = require('node-rsa');
const key = new NodeRSA({b: 512});
const Bcrypt = require("bcryptjs");
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
                var service =  await MedicalServices.create(data);    // insert service data
                var info =  await MedicalcenterInfo.create(data);        // insert info data
                var userToken = await GenerateToken.generate(users.id);     // generate auth token
                let userInfo = {
                    data: {person: users, service:service ,info: info},
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
            // const text = 'Hello RSA!';
            // const encrypted = key.encrypt(text, 'base64');
            // console.log('encrypted: ', encrypted);
            const role = key.decrypt(data.role, 'utf8');
            var usersdetail =  await Users.findOne({where:{email: data.email,role: data.role}}).then(project => {
                if(project)
                return project.get();
               });
            //    console.log(usersdetail);
               
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
        try{
           
            var usersdetail =  await Users.findOne({where:{'email':data.data.email,'role':data.data.role}}).then(project => {
                if(project)
                return project.get();
               });      //return result for email id
            if(usersdetail){
                let token = await GenerateToken.generate(usersdetail.id);
                let link = data.url+'/reset/'+token;
                console.log(link);
                let transporter = await emailConfig.config();     // call transport configurations.
                  let info = await transporter.sendMail({
                    from: '"Open2Care" <foo@example.com>', // sender address
                    to: "osvinphp@gmail.com", // list of receivers
                    subject: "Forget Password (Open2Care)", // Subject line
                    text: "Hello world?", // plain text body
                    html: "<b><a href='"+link+"'>Click here to reset your password</a></b>" // html body
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