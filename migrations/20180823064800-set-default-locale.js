'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.changeColumn('users', 'localeId', 
      { type: Sequelize.INTEGER,
      allowNull:false,
      defaultValue: 1 });
  },

  down: (queryInterface, Sequelize) => {
     return queryInterface.changeColumn('users', 'localeId', 
     { 
      type: Sequelize.INTEGER});
  }
}
