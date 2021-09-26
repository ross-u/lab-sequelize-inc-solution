const { Sequelize } = require("sequelize");

// Iteration 1.3
module.exports = (sequelize) => {
  const Employee = sequelize.define(
    "Employee",
    {
      first_name: { type: Sequelize.STRING },
      last_name: { type: Sequelize.STRING },
      date_of_birth: { type: Sequelize.DATE, allowNull: false },
      email: { type: Sequelize.STRING, unique: true },
      salary: { type: Sequelize.DECIMAL(10, 2), allowNull: false, },
      department: {type: Sequelize.ENUM(['it', 'hr', 'finance', 'marketing', 'other']) },
      rank: {type: Sequelize.ENUM(['employee', 'contractor', 'supervisor', 'executive']) }
    },
    {
      tableName: "Employee",
      createdAt: false,
      updatedAt: false,
    }
  );

  return Employee;
};
