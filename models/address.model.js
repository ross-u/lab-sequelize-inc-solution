const { Sequelize } = require("sequelize");

module.exports = (sequelize) => {
  const Address = sequelize.define(
    "Address",
    {
      street: { type: Sequelize.STRING, allowNull: false },
      city: { type: Sequelize.STRING, allowNull: false },
      country: { type: Sequelize.STRING, allowNull: false },
    },
    {
      tableName: "Address",
      createdAt: false,
      updatedAt: false,
    }
  );

  return Address;
};
