import Sequelize, { Model } from 'sequelize';

export default class Report extends Model {
  static init(sequelize) {
    super.init({
      user: Sequelize.STRING,
      savedSearch: Sequelize.STRING,
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      term: {
        type: Sequelize.STRING,
        allowNull: false
      }
    }, {
      sequelize
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user' });
    this.belongsTo(models.SavedSearch, { foreignKey: 'savedSearch' });
  }
}