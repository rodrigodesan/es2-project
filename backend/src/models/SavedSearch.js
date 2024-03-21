import Sequelize, { Model } from 'sequelize';

export default class SavedSearch extends Model {
  static init(sequelize) {
    super.init({
      userID: Sequelize.STRING,
      termo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      filtro1: Sequelize.STRING,
      filtro2: Sequelize.STRING,
      filtro3: Sequelize.STRING,
    }, {
      sequelize
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'userID' });
  }
}