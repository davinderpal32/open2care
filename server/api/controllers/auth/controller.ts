import AuthService from '../../services/auth.service';
import { Request, Response } from 'express';
import carecenterValidate from "../../../../validations/carecenters";

export class Controller {
 
  async careCenterRegister( req: Request, res: Response ){
    const validates = await carecenterValidate.validate(req.body); 
    if(validates){
      res.json(validates);
    }else{
      AuthService.careCenterRegister(req.body).then(r =>{
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
  careCenterlogin(req: Request, res: Response): void {
    AuthService.careCenterlogin(req.body).then(r =>
      res
        .status(200)
        .header("Access-Control-Allow-Origin", "*")
        .location(`<%= apiRoot %>/auth/`)
        .json(r), 
    );
  }

  patientRegister(req: Request, res: Response): void {
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
  forgetPassword(req: Request, res: Response): void {

    var data = {url: req.headers.host,data:req.body }
        AuthService.forgetPassword(data).then(r => {
      if (r) res.json(r);
      else res.status(404).end();
    });
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
