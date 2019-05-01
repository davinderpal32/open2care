import AuthService from '../../services/auth.service';
import { Request, Response } from 'express';

export class Controller {
 
  careCenterRegister(req: Request, res: Response): void {
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
  login(req: Request, res: Response): void {
    AuthService.login(req.body).then(r =>
      res
        .status(200)
        .header("Access-Control-Allow-Origin", "*")
        .location(`<%= apiRoot %>/auth/`)
        .json(r), 
    );
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
