'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('category', [
      { name: 'Camisetas' },
      { name: 'Pantalones' },
      { name: 'Calzado' },
      { name: 'Abrigos' },
      { name: 'Vestidos y Faldas' }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('category', null, {});
  }
};