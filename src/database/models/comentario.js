const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Comentario extends Model {
    static associate(models) {
      Comentario.belongsTo(models.Video,{
        foreignKey: "fk_video"
      })
    }
  };
  Comentario.init({
    usuario: DataTypes.STRING,
    mensaje: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Comentario',
  });
  return Comentario;
};