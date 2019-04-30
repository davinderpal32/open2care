import loginService from '../services/login.service';
import { Request, Response } from 'express';

export class loginController {
 
  login(req: Request, res: Response): void {
    loginService.login(req.body).then(r =>{
      if(r.error == false){
        res.render('index',{message: 'Login successfully'});
      }else{
        res.render('index',{message: r.message});
      }
    });
  }
}
export default new loginController();
