import dotenv from 'dotenv';

dotenv.config();

import './database';

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import regionRoutes from './routes/regionRoutes';
import stateRoutes from './routes/stateRoutes';
import yearRoutes from './routes/yearRoutes';
import resourceRoutes from './routes/resourceRoutes';
import commitmentTermRoutes from './routes/commitmentTermRoutes';
import userRoutes from './routes/userRoutes';
import loginRoutes from './routes/loginRoutes';
import savedSearchRoutes from './routes/savedSearchRoutes';

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
    this.routes();
  }

  middlewares() {
    this.app.use(cors(corsOptions));
    this.app.use(helmet({ crossOriginResourcePolicy: false }));
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/regions', regionRoutes);
    this.app.use('/states', stateRoutes);
    this.app.use('/years', yearRoutes);
    this.app.use('/resources', resourceRoutes);
    this.app.use('/commitment-terms', commitmentTermRoutes);
    this.app.use('/users', userRoutes);
    this.app.use('/login', loginRoutes);
    this.app.use('/saved-searches', savedSearchRoutes);
  }
}

export default new App().app;
