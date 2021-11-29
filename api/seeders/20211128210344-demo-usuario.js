'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

      await queryInterface.bulkInsert('usuarios', [
      {
          nome: "Meltalder",
          email: "metalder@neroz.com",
          login: "metalder",
          senha: "imperioNeroz",
          telefone: "1234567890",
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
        nome: "Sharivan",
        email: "sharivan@mad.com",
        login: "sharivan",
        senha: "imperioMad",
        telefone: "11121314",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
      nome: "Machineman",
      email: "machineman@pleiades.com",
      login: "machineman",
      senha: "Pleiades",
      telefone: "00000000000",
      createdAt: new Date(),
      updatedAt: new Date()
  },
    
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    

      await queryInterface.bulkDelete('usuarios', null, {});
     
  }
};
