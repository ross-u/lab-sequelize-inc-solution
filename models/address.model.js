const { Sequelize } = require("sequelize");

// Iteration 1.2
module.exports = (sequelize) => {
  const Address = sequelize.define(
    "Address",
    {
      company_name: { type: Sequelize.STRING, allowNull: false, unique: true },      
      street: { type: Sequelize.STRING, allowNull: false },
      city: { type: Sequelize.STRING, allowNull: false },
      state: { type: Sequelize.STRING, allowNull: false },
      country: { type: Sequelize.STRING, allowNull: false },
      image: { type: Sequelize.STRING, allowNull: false },
    },
    {
      tableName: "Address",
      createdAt: false,
      updatedAt: false,
    }
  );

  return Address;
};
