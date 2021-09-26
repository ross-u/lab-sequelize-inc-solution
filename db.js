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
const Company = require("./models/company.model")(sequelize);
const Address = require("./models/address.model")(sequelize);
const Employee = require("./models/employee.model")(sequelize);


// Create relationships

// One-To-One (1:1) - Company <-> Address
// Creates a foreign key in the Company table
Address.hasOne(Company);

Company.belongsTo(Address, {
  foreignKey: "AddressId",
  as: "address",
  // Set the name of the foreign key in the Company to be `AddressId`
  // Create alias `address` in the Company that will be used to get the Company's Address.
});


// One-To-Many (1:N) - Company <-> Employee
// Creates a foreign key in the Employee table
Company.hasMany(Employee, { 
  as: "employees"
  // Create alias `employees` in the Company that will be used to get the Company's employees.
});

Employee.belongsTo(Company, {
  foreignKey: "CompanyId",
  // Set the name of the foreign key in the Employee to be `CompanyId`
});


// Export the sequelize connection and initialized models
module.exports = { sequelize, Company, Address, Employee };
