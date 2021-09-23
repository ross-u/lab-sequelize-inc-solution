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


// Create relationships

// One-To-One (1:1) - User <-> Address
// Creates a foreign key in the User table
Address.hasOne(User);

User.belongsTo(Address, {
  foreignKey: "AddressId",
  as: "address",
  // Set the name of the foreign key in the User to be `AddressId`
  // Create alias `address` in the User that will be used to get the user's address.
});


// One-To-Many (1:N) - User <-> Post                  //  <== ADD
// Creates a foreign key in the Post table
User.hasMany(Post, { 
  as: "posts"
  // Create alias `posts` in the User that will be used to get the user's posts.
});

Post.belongsTo(User, {
  foreignKey: "UserId",
  // Set the name of the foreign key in the Post to be `UserId`
});


// Export the sequelize connection and initialized models
module.exports = { sequelize, User, Address, Post };
