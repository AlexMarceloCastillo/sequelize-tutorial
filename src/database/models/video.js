const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Video extends Model {
    static associate(models) {
      Video.hasMany(models.Comentario,{
        foreignKey: "fk_video"
      });
    }
  };
  Video.init({
    titulo: DataTypes.STRING,
    descripcion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Video',
  });
  return Video;
};