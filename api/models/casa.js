'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class casa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  casa.init({
    valor_aluguel: DataTypes.NUMBER,
    num_quartos: DataTypes.NUMBER,
    num_suites: DataTypes.NUMBER,
    num_sala_estar: DataTypes.NUMBER,
    num_vagas_garagem: DataTypes.NUMBER,
    area: DataTypes.NUMBER,
    armario_embutido: DataTypes.BOOLEAN,
    descricao: DataTypes.STRING,
    login_proprietario: DataTypes.STRING,
    codigo: DataTypes.NUMBER,
    logradouro: DataTypes.STRING,
    numero: DataTypes.NUMBER,
    complemento: DataTypes.STRING,
    cep: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'casa',
  });
  return casa;
};