import loginService from '../services/login.service';
import settingsService from '../services/settings.service';
import { Request, Response } from 'express';

export class settingsController {
 
  index(req: Request, res: Response): void {
    
    settingsService.addservices(req.body).then(r =>{
      if(r.error == false){
        res.render('dashboard',{message: 'Login successfully'});
      }else{
        res.render('index',{message: r.message});
      }
    });
  }
}
export default new settingsController();
