import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import User from '../app/models/User';
import Recipient from '../app/models/Recipient';
import File from '../app/models/File';
import Deliveryman from '../app/models/Deliveryman';
import Signature from '../app/models/Signature';
import Delivery from '../app/models/Delivery';
import DeliveryProblem from '../app/models/DeliveryProblem';

const models = [
  User,
  Recipient,
  File,
  Deliveryman,
  Signature,
  Delivery,
  DeliveryProblem,
];

class Databese {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Databese();
