import UsersService from '../../services/users.service';
import { Request, Response } from 'express';

export class Controller {
  getUser(req: Request, res: Response): void {
    UsersService.getUser().then(r => res.json(r));
  }
  
  addUser(req: Request, res: Response): void {
    UsersService.addUser(req.body.name).then(r =>
      res
        .status(201)
        .location(`<%= apiRoot %>/User/${r.id}`)
        .json(r),
    );
  }
}
export default new Controller();