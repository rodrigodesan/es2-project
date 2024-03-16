import Sequelize, { Model } from 'sequelize';

export default class State extends Model {
  static init(sequelize) {
    super.init({
      acronym: Sequelize.STRING,
      name: Sequelize.STRING,
      region: Sequelize.INTEGER,
    }, {
      sequelize,
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Region, { foreignKey: 'region' });
    this.hasMany(models.CommitmentTerm, { foreignKey: 'state' });
  }
}
