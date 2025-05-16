'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('productDetail', [
      {
        detail: 'pantalón'
      },
      {
        detail: 'Denim'
      },
      {
        detail: 'Sintético'
      },
      {
        detail: 'Lino'
      },
      {
        detail: 'Poliéster'
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('product_detail', null, {});
  }
};