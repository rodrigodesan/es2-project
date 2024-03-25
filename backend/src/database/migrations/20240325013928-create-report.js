module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('reports', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      savedSearch: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'saved_searches',
          key: 'id'
        }
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      term: {
        allowNull: false,
        type: Sequelize.STRING
      },
    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('reports');
  }
};
