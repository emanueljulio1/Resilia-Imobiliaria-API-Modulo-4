'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class apartamento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  apartamento.init({
    valor_aluguel: DataTypes.NUMBER,
    num_quartos: DataTypes.NUMBER,
    num_suites: DataTypes.NUMBER,
    num_sala_estar: DataTypes.NUMBER,
    num_vagas_garagem: DataTypes.NUMBER,
    area: DataTypes.NUMBER,
    armario_embutido: DataTypes.BOOLEAN,
    condominio: DataTypes.NUMBER,
    descricao: DataTypes.STRING,
    num_sala_jantar: DataTypes.NUMBER,
    andar: DataTypes.NUMBER,
    portaria_24: DataTypes.BOOLEAN,
    login_proprietario: DataTypes.STRING,
    codigo: DataTypes.NUMBER,
    municipio: DataTypes.STRING,
    bairro: DataTypes.STRING,
    logradouro: DataTypes.STRING,
    numero: DataTypes.NUMBER,
    complemento: DataTypes.STRING,
    cep: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'apartamento',
  });
  return apartamento;
};