import AuthService from '../../services/auth.service';
import { Request, Response } from 'express';

export class Controller {
 
  register(req: Request, res: Response): void {
    AuthService.create(req.body).then(r =>
      res
        .status(201)
        .location(`<%= apiRoot %>/auth/`)
        .json(r),
    );
  }
}
export default new Controller();
