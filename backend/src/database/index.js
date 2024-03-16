import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import Region from '../models/Region';
import State from '../models/State';
import Year from '../models/Year';
import Resource from '../models/Resource';
import CommitmentTerm from '../models/CommitmentTerm';

const models = [Region, State, Year, Resource, CommitmentTerm];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
