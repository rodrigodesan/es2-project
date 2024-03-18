import Sequelize, { Model } from 'sequelize';

export default class Resource extends Model {
  static init(sequelize) {
    super.init({
      item: Sequelize.STRING,
      initiative: Sequelize.STRING,
      object: Sequelize.STRING,
      value: Sequelize.FLOAT,
    }, {
      sequelize,
    });
    return this;
  }

  static associate(models) {
    this.hasMany(models.CommitmentTerm, { foreignKey: 'year' });
  }
}
