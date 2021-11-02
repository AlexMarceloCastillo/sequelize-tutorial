const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Persona extends Model {
    static associate(models) {
      Persona.hasOne(models.Domicilio,{
        foreignKey: "fk_persona",
        as: "domicilio"
      });
      Persona.belongsToMany(models.Comercio,{
        through: "comercio_persona"
      });
    }
  };
  Persona.init({
    nombre: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Persona',
  });
  return Persona;
};