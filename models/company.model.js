const { Sequelize } = require("sequelize");

// Iteration 1.1
module.exports = (sequelize) => {
  const Company = sequelize.define(
    "Company",
    {
      company_name: { type: Sequelize.STRING, allowNull: false, unique: true },
      category: {type: Sequelize.ENUM(['web', 'software', 'hardware', 'social' ]) },
      number_of_employees: { type: Sequelize.INTEGER, allowNull: false },
      founded_year: { type: Sequelize.INTEGER, allowNull: false },
      homepage_url: { type: Sequelize.STRING, allowNull: false },
      twitter_username: { type: Sequelize.STRING, allowNull: false },
      active: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: true }
    },
    {
      tableName: "Company",
      createdAt: false,
      updatedAt: false,
    }
  );

  return Company;
};
