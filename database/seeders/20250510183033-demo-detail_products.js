'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('productDetail', [
      {
        fabric: 'Algodón',
        color: 'Blanco',
        size: 'M',
      },
      {
        fabric: 'Denim',
        color: 'Azul',
        size: '32',
      },
      {
        fabric: 'Sintético',
        color: 'Negro',
        size: '42',
      },
      {
        fabric: 'Lino',
        color: 'Beige',
        size: 'L',
      },
      {
        fabric: 'Poliéster',
        color: 'Rojo',
        size: 'S',
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('product_detail', null, {});
  }
};