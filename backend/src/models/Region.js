import Sequelize, { Model } from 'sequelize';

export default class Region extends Model {
  static init(sequelize) {
    super.init({
      acronym: {
        type: Sequelize.STRING,
        unique: true,
      },
      name: Sequelize.STRING,
    }, {
      sequelize,
    });
    return this;
  }

  static associate(models) {
    this.hasMany(models.State, { foreignKey: 'region' });
  }
}
