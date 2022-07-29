"use strict";

// import bcrypt from 'bcrypt'
const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const admin = await bcrypt.hash('123', 10);
    const noadmin = await bcrypt.hash('321', 10);
    await queryInterface.bulkInsert('Users', [{
      nameUser: 'Admin',
      email: 'admin@123',
      role_id: '1',
      hashPassword: admin,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nameUser: 'noAdmin',
      email: 'noadmin@321',
      role_id: '2',
      hashPassword: noadmin,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }

};