import path from 'path'; import Sequelize from 'sequelize';

import {
  isPostgres, pgConnectionString, firebaseURL,
} from '../config';

var pg = require('pg');
pg.defaults.ssl = true;

export default !firebaseURL || isPostgres
  ? new Sequelize(
    isPostgres
      ? pgConnectionString
      : {
        dialect: 'sqlite',
        storage: path.resolve(__dirname, 'db', 'background-geolocation.db'),
      },
      isPostgres ? {dialectOptions: {
        ssl: true
      } : {}},
  )
  : null;
