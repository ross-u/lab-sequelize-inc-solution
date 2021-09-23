const { Sequelize } = require("sequelize");

const DB_NAME = "sequelize_advanced";
const DB_USER = "admin";
const DB_PASSWORD = "admin";
const DB_HOST = "localhost";

// Connect to the database
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "postgres",
  logging: false,
});

// Initialize models
const User = require("./models/user.model")(sequelize);
const Address = require("./models/address.model")(sequelize);
const Post = require("./models/post.model")(sequelize);

// Export the sequelize connection and initialized models
module.exports = { sequelize, User, Address, Post };
