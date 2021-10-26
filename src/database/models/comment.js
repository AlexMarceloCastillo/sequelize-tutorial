const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {
      Comment.belongsTo(models.Tutorial)
    }
  };
  Comment.init({
    name: DataTypes.STRING,
    text: DataTypes.STRING,
    fk_tutorial: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};