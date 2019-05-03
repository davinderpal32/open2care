import TypeService from '../../services/types.services';
import { Request, Response } from 'express';

export class Controller {
 
  types(req: Request, res: Response): void {
    TypeService.get(req.body).then(r =>{
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
export default new Controller();
