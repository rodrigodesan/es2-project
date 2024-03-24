module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('saved_searches', {
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
      term: {
        allowNull: false,
        type: Sequelize.STRING
      },
      filter1: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      filter2: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      filter3: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      }
    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('saved_searches');
  }
};
