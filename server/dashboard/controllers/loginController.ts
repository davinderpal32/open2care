// import loginService from '../services/login.service';
import { Request, Response } from 'express';

export class loginController {
 
  login(req: Request, res: Response): void {
    console.log('login');
   res.render('index');
  }
}
export default new loginController();
