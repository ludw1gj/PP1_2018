'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('matches');
      
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.createTable('matches', { id: Sequelize.INTEGER });
  }
};
