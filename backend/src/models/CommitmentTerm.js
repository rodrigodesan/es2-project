import Sequelize, { Model } from 'sequelize';

export default class CommitmentTerm extends Model {
  static init(sequelize) {
    super.init({
      cnpj: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isCNPJ(value) {
            const cnpjRegex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;
            if (!cnpjRegex.test(value)) {
              throw new Error('Invalid CNPJ');
            }
          },
        },
      },
      entity: Sequelize.STRING,
      companyName: Sequelize.STRING,
      process: Sequelize.STRING,
      term: Sequelize.STRING,
      value: Sequelize.FLOAT,
      validityStart: Sequelize.DATE,
      validityEnd: Sequelize.DATE,
      state: Sequelize.INTEGER,
      year: Sequelize.INTEGER,
      resource: Sequelize.INTEGER,
    }, {
      sequelize,
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.State, { foreignKey: 'state' });
    this.belongsTo(models.Year, { foreignKey: 'year' });
    this.belongsTo(models.Resource, { foreignKey: 'resource' });
  }
}
