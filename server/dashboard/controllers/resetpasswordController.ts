import resetService from '../services/reset.service';
import { Request, Response } from 'express';

export class resetpasswordController {
 
  reset(req: Request, res: Response): void {
      var data = {token: req.params.email,post: req.body}
    resetService.reset(data).then(r =>{
      if(r.error == false){
          console.log(r);
        res.render('reset',{message: 'Password updated successfully'});
      }else{
        res.render('reset',{message: r.message});
      }
    });
  }
}
export default new resetpasswordController();
