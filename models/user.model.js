const { Sequelize } = require("sequelize");

module.exports = (sequelize) => {
  const User = sequelize.define(
    "User",
    {
      first_name: { type: Sequelize.STRING, allowNull: false },
      last_name: { type: Sequelize.STRING, allowNull: false },
      email: { type: Sequelize.STRING, allowNull: false, unique: true },
    },
    {
      tableName: "User",
      createdAt: false,
      updatedAt: false,
    }
  );

  return User;
};
