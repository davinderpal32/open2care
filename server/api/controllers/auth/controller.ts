import AuthService from '../../services/auth.service';
import { Request, Response } from 'express';
import carecenterValidate from "../../../../validations/carecenters";


export class Controller {
 
  async careCenterRegister( req: Request, res: Response , next:any) {

    //console.log(req);
    //const validates = await carecenterValidate.validateRegister(req.body);               /// validate request data
    // if(validates.error == true){                    /// if validations failed
    //   res.status(400)
    //   .header("Access-Control-Allow-Origin", "*")
    //   .json(validates).end();
    // }else{
      AuthService.careCenterRegister(req.body).then(r =>{
        if(r.error == false){
          res
            .status(200)
            .header("Access-Control-Allow-Origin", "*")
            .json(r);
        }else{
          res
            .status(400)
            .header("Access-Control-Allow-Origin", "*")
            .json(r).end();
        }
      });
    //}
  }

  async careCenterlogin(req: Request, res: Response) {
    const validates = await carecenterValidate.validateLogin(req.body);                /// validate request data
    if(validates.error == true){      /// if validations failed
      res.status(400)
      .header("Access-Control-Allow-Origin", "*")
      .json(validates).end();
    }else{
      AuthService.careCenterLogin(req.body).then(r =>{
        if(r.error == false){
          res
            .status(200)
            .header("Access-Control-Allow-Origin", "*")
            .location(`<%= apiRoot %>/auth/`)
            .json(r);
        }else{
          res
            .status(400)
            .header("Access-Control-Allow-Origin", "*")
            .location(`<%= apiRoot %>/auth/`)
            .json(r).end();
        }
      });
    }
  }

  async patientRegister(req: Request, res: Response) {
    const validates = await carecenterValidate.validateForgot(req.body);    /// validate request data
    if(validates.error == true){                       /// if validations failed
      res.status(400)
      .header("Access-Control-Allow-Origin", "*")
      .json(validates).end();
    }else{
      AuthService.patientRegister(req.body).then(r =>{
        if(r.error == false){
          res
            .status(200)
            .header("Access-Control-Allow-Origin", "*")
            .location(`<%= apiRoot %>/auth/`)
            .json(r);
        }else{
          res
            .status(400)
            .header("Access-Control-Allow-Origin", "*")
            .location(`<%= apiRoot %>/auth/`)
            .json(r).end();
        }
      });
    }
  }


  async patientlogin(req: Request, res: Response) {
    const validates = await carecenterValidate.validateLogin(req.body);                /// validate request data
    if(validates.error){      /// if validations failed
      res.status(400)
      .header("Access-Control-Allow-Origin", "*")
      .json(validates).end();
    }else{
      AuthService.patientLogin(req.body).then(r =>{
        if(r.error == false){
          res
            .status(200)
            .header("Access-Control-Allow-Origin", "*")
            .location(`<%= apiRoot %>/auth/`)
            .json(r);
        }else{
          res
            .status(400)
            .header("Access-Control-Allow-Origin", "*")
            .location(`<%= apiRoot %>/auth/`)
            .json(r).end();
        }
      });
    }
  }

  async forgetPassword(req: Request, res: Response) {

    var data = {url: req.headers.host,data:req.body }
    const validates = await carecenterValidate.validateForgot(req.body);    /// validate request data
    if(validates.error == true){                       /// if validations failed
      res.status(400)
      .header("Access-Control-Allow-Origin", "*")
      .json(validates).end();
    }else{
      AuthService.forgetPassword(data).then(r =>{
        if(r.error == false){
          res
            .status(200)
            .header("Access-Control-Allow-Origin", "*")
            .location(`<%= apiRoot %>/auth/`)
            .json(r);
        }else{
          res
            .status(400)
            .header("Access-Control-Allow-Origin", "*")
            .location(`<%= apiRoot %>/auth/`)
            .json(r).end();
        }
      });
    }
  }

  resetPassword(req: Request, res: Response): void {
    var data = {authorization: req.headers.Authorization, 
    body:req.body};
    AuthService.resetPassword(data).then(r =>
      res
        .status(201)
        .location(`<%= apiRoot %>/auth/`)
        .json(r),
    );
  }
}
export default new Controller();
