import ServiceService from '../../services/service.services';
import { Request, Response } from 'express';

export class Controller {
 
  services(req: Request, res: Response): void {
    ServiceService.get(req.body).then(r =>{
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
