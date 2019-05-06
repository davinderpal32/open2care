import loginService from '../services/login.service';
import settingsService from '../services/settings.service';
import { Request, Response } from 'express';

export class settingsController {
 
  addtype(req: Request, res: Response): void {
    settingsService.addtype(req.body).then(r =>{
      if(r.error == false){
        res.render('listtype',{message: r.message});
      }else{
        res.render('addtype',{message: r.message});
      }
    });
  }


  listtype(req: Request, res: Response): void {
    settingsService.listtype(req.body).then(r =>{
      if(r.error == false){
        res.render('listtype',{message: r.message});
      }else{
        res.render('addtype',{message: r.message});
      }
    });
  }



}
export default new settingsController();
