'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('productDetail', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      detail: {
        type: Sequelize.STRING(25),
        allowNull: false,
      }
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('productDetail');
  }
};
