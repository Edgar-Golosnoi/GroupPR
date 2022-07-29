module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CheckLists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nameEmployer: {
        type: Sequelize.STRING,
      },
      nameMentor: {
        type: Sequelize.STRING,
      },
      point1: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      point2: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      point3: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      point4: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      point5: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      point6: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      point7: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      point8: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      point9: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      point10: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      point11: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      point12: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      pointInput: {
        type: Sequelize.STRING,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Users',
          },
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('CheckLists');
  },
};
