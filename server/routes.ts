import { Application } from 'express';
import examplesRouter from './api/controllers/examples/router';
import authRouter from './api/controllers/auth/router';
import serviceRouter from './api/carecenter/controllers/services/router';
import typeRouter from './api/carecenter/controllers/types/router';
import insuranceRouter from './api/carecenter/controllers/insurances/router';
import loginRouter from './dashboard/routers/router';


export default function routes(app: Application): void {
  app.use('/api/v1/examples', examplesRouter);
  app.use('/api/v1/auth', authRouter);
  app.use('/api/v1/carecenterService', serviceRouter);
  app.use('/api/v1/carecenterTypes', typeRouter);
  app.use('/api/v1/insurances', insuranceRouter);
  app.use('/', loginRouter);
  app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
      res.status(401).send('Unauthorized access');
    }
  });
};
