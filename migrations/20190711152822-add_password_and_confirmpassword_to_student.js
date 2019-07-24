"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn("Students", "password", {
        type: Sequelize.STRING
      }),
      queryInterface.addColumn("Students", "confirmpassword", {
        type: Sequelize.STRING
      })
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
