import dotenv from 'dotenv';

dotenv.config();

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

const whiteList = (`${process.env.APP_WHITELIST}`).split(',');

const corsOptions = {
  origin(origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },

};

class App {
  constructor() {
    this.app = express();
    this.middlewares();
  }

  middlewares() {
    this.app.use(cors(corsOptions));
    this.app.use(helmet({ crossOriginResourcePolicy: false }));
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }
}

export default new App().app;
