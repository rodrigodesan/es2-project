import Sequelize, { Model } from 'sequelize';

export default class Report extends Model {
  static init(sequelize) {
    super.init({
      user: Sequelize.INTEGER,
      savedSearch: Sequelize.INTEGER,
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