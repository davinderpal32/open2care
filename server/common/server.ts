import express from 'express';
import { Application } from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import http from 'http';
import os from 'os';
import cookieParser from 'cookie-parser';
import swaggerify from './swagger';
import l from './logger';
import mongoose from "mongoose";

const app = express();

export default class ExpressServer {
  constructor() {
    const root = path.normalize(__dirname + '/../..');
    app.set('appPath', root + 'client');
    app.use(bodyParser.json({ limit: process.env.REQUEST_LIMIT || '100kb' }));
    app.use(bodyParser.urlencoded({ extended: true, limit: process.env.REQUEST_LIMIT || '100kb' }));
    app.use(cookieParser(process.env.SESSION_SECRET));
    app.use(express.static(`${root}/public`));
  }

  router(routes: (app: Application) => void): ExpressServer {
    swaggerify(app, routes);
    return this;
  }
  listen(p: string | number = process.env.PORT): Application {
    const {
   MONGO_USER,
   MONGO_PASSWORD,
   MONGO_PATH,
   } = process.env;

    try {// I added this extra check
        console.log('setting client');
        mongoose.Promise = global.Promise;
        //const uri = "mongodb+srv://renuyadav:@renuyadav1@cluster0-d0ihi.mongodb.net/test?retryWrites=true";
        var client = mongoose.connect(`${MONGO_PATH}`,{ useNewUrlParser: true },function(err, db){
          console.log(db);
        });

        const welcome = port => () => l.info(`up and running in ${process.env.NODE_ENV || 'development'} @: ${os.hostname() } on port: ${port}}`);
        http.createServer(app).listen(p, welcome(p));
        console.log(app);
        return app;
    } catch(error) {
      console.log('error during connecting to mongo: ');
      console.error(error);
    }

  }
}
