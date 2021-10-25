const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Tutorial extends Model {
    static associate(models) {
      Tutorial.hasMany(models.Comment, {
        foreignKey: 'tutorial_Id',
        as: 'comments'
      });
    }
  };
  Tutorial.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tutorial',
  });
  return Tutorial;
};