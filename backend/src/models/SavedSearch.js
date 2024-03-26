import Sequelize, { Model } from 'sequelize';

export default class SavedSearch extends Model {
  static init(sequelize) {
    super.init({
      user: Sequelize.STRING,
      term: {
        type: Sequelize.STRING,
        allowNull: false
      },
      filter1: Sequelize.STRING,
      filter2: Sequelize.STRING,
      filter3: Sequelize.STRING,
    }, {
      sequelize
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user' });
    this.hasMany(models.Report, { foreignKey: 'saved_search' });
  }
}