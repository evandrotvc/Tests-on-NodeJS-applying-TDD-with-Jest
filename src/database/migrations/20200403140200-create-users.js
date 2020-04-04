'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false, // campo obrigatório
        autoIncrement: true,
      },
      name:{
        type: Sequelize.STRING,
        allowNull: false, // campo obrigatório
      },
      email:{
        type: Sequelize.STRING,
        allowNull: false, // campo obrigatório
        unique: true,
      },
      password_hash:{
        type: Sequelize.STRING,
        allowNull: false, // campo obrigatório
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false, // campo obrigatório
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false, // campo obrigatório
      },
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users')
  }
};
