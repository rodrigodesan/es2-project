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
      termo: {
        allowNull: false,
        type: Sequelize.STRING
      },
      filtro1: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      filtro2: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      filtro3: {
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
