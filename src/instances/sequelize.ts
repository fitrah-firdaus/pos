import { Sequelize } from 'sequelize';

import { DB_USER_NAME, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME} from '../config/constants';

let connection = 'mysql://' + DB_USER_NAME + ':' + DB_PASSWORD + '@' + DB_HOST + ':' + DB_PORT + '/' + DB_NAME;

export const sequelize = new Sequelize(connection);

sequelize.authenticate();