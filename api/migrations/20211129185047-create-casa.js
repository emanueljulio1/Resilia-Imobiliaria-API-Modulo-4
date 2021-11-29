'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('casas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      valor_aluguel: {
        type: Sequelize.NUMBER
      },
      num_quartos: {
        type: Sequelize.NUMBER
      },
      num_suites: {
        type: Sequelize.NUMBER
      },
      num_sala_estar: {
        type: Sequelize.NUMBER
      },
      num_vagas_garagem: {
        type: Sequelize.NUMBER
      },
      area: {
        type: Sequelize.NUMBER
      },
      armario_embutido: {
        type: Sequelize.BOOLEAN
      },
      descricao: {
        type: Sequelize.STRING
      },
      login_proprietario: {
        type: Sequelize.STRING
      },
      codigo: {
        type: Sequelize.NUMBER
      },
      logradouro: {
        type: Sequelize.STRING
      },
      numero: {
        type: Sequelize.NUMBER
      },
      complemento: {
        type: Sequelize.STRING
      },
      cep: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('casas');
  }
};