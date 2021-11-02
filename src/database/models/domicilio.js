const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Domicilio extends Model {
    static associate(models) {
      Domicilio.belongsTo(models.Persona,{
        foreignKey: "fk_persona",
        as: "domicilio"
      })
    }
  };
  Domicilio.init({
    calle: DataTypes.STRING,
    numero: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Domicilio',
  });
  return Domicilio;
};