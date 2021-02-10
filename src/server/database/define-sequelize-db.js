import path from 'path'; import Sequelize from 'sequelize';

import {
  isPostgres, pgConnectionString, firebaseURL,
} from '../config';

var pg = require('pg');
pg.defaults.ssl = true;

export default !firebaseURL || isPostgres
  ? 
  new Sequelize(pgConnectionString, {
    dialect: 'postgres',
    dialectOptions: {
      ssl: true
    }
  })
  : null;
