import { Application } from 'express';
import examplesRouter from './api/controllers/examples/router';
import usersRouter from './api/controllers/users/router';
import authRouter from './api/controllers/auth/router';
import loginRouter from './dashboard/routers/router';

export default function routes(app: Application): void {
  app.use('/api/v1/examples', examplesRouter);
  app.use('/api/v1/users', usersRouter);
  app.use('/api/v1/auth', authRouter);
  app.use('/', loginRouter);
  app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
      res.status(401).send('Unauthorized access');
    }
  });
};
