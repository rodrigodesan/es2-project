import Sequelize, { Model } from 'sequelize';

export default class Year extends Model {
  static init(sequelize) {
    super.init({
      year: {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false,
      },
    }, {
      sequelize,
    });
    return this;
  }

  static associate(models) {
    this.hasMany(models.CommitmentTerm, { foreignKey: 'year' });
  }
}
