const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Comercio extends Model {
    static associate(models) {
      Comercio.belongsToMany(models.Persona,{
        through: "comercio_persona"
      });
    }
  };
  Comercio.init({
    establecimiento: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Comercio',
  });
  return Comercio;
};