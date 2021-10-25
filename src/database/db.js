const { Sequelize, DataTypes } = require("sequelize");
const config = require("./config/config").development;


const db = {};

const { username, password, database, ...dbConfig } = config;

db.connection = new Sequelize(database, username, password, dbConfig);

// Vinculacion de modelos
db.Tutorial = require("./models/tutorial")(db.connection, DataTypes);
db.Comment = require("./models/comment")(db.connection, DataTypes);

db.Tutorial.hasMany(db.Comment);
db.Comment.belongsTo(db.Tutorial);

module.exports = db;