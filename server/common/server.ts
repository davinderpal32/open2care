import express from 'express';
import { Application } from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import http from 'http';
import os from 'os';
import cookieParser from 'cookie-parser';
import swaggerify from './swagger';
import l from './logger';
const Sequelize = require('sequelize');
// import mongoose from "mongoose";


const app = express();

export default class ExpressServer {
  constructor() {
    const root = path.normalize(__dirname + '/../..');
    app.set('appPath', root + 'client');
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'ejs');
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
    
    try {

      let abc = new Sequelize('`${process.env.DATABASE}`', '`${process.env.USER}`', '`${process.env.PASSWORD}`',{host: 'localhost',dialect: 'mysql'});
      if(abc){
        console.log("connection established...");
      }
        const welcome = port => () => l.info(`up and running in ${process.env.NODE_ENV || 'development'} @: ${os.hostname() } on port: ${port}}`);
        http.createServer(app).listen(p, welcome(p));
        return app;
    } catch(error) {
      console.error(error);
    }

  }
}
