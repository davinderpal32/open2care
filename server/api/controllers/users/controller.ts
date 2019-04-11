import UsersService from '../../services/users.service';
import { Request, Response } from 'express';

export class Controller {
  getUser(req: Request, res: Response): void {
    UsersService.getUser().then(r => res.json(r));
  }
}
export default new Controller();