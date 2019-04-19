import { Application } from 'express';
import examplesRouter from './api/controllers/examples/router';
import usersRouter from './api/controllers/users/router';

export default function routes(app: Application): void {
  app.use('/api/v1/examples', examplesRouter);
  app.use('/api/v1/users', usersRouter);
  app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
      res.status(401).send('Unauthorized access');
    }
  });
};
