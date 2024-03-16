module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('commitment_terms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      cnpj: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      entity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      companyName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      process: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      term: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      value: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      validityStart: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      validityEnd: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      state: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'states',
          key: 'id',
        },
      },
      year: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'years',
          key: 'id',
        },
      },
      resource: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'resources',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('commitment_terms');
  },
};
