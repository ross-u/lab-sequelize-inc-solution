const { sequelize, Company, Address, Employee } = require("../db");
const { companies, addresses, employees } = require("./seed-data.bonus");
const printRows = require("../utils/print-rows");

sequelize
  .authenticate()
  .then(() => console.log("Connected to the DB"))
  .then(() => sequelize.sync({ force: true }))
  .then(() => console.log("Dropped to tables and re-synced."))
  // Create addresses
  .then(() => Address.create(addresses))
  .then((createdAddresses) => printRows("createdAddresses", createdAddresses))
  // Create companies and link them with addresses
  .then(() => Address.findAll())    
  .then((allAddresses) => {
    const updatedCompanies = companies.map((companyObj, i) => {
      // Update each company object to add an AddressId property as a foreign key
      return { ...companyObj, AddressId: allAddresses[i].id };
    });

    return Company.bulkCreate(updatedCompanies);
  })
  .then((createdCompanies) => printRows("createdCompanies", createdCompanies))
  // Retrieve all Company rows and use `include` to embed the `address`
  .then(() => Company.findAll({ include: ["address"] }))
  .then((companies) => printRows("companies", companies))
  // Create employees and link them with companies
  .then(() => Company.findAll())  
  .then(() => {
    const updatedEmployees = employees.map((employeeObj, i) => {
      const companyIndex = i % 5;
      /*  userIndex will  be in range from 0 - 4:
          0 % 5 = 0
          1 % 5 = 1
          2 % 5 = 2
          3 % 5 = 3
          4 % 5 = 4
          ---------
          5 % 5 = 0
          6 % 5 = 1
          7 % 5 = 2
          8 % 5 = 3
          9 % 5 = 4    */
      const company = companies[companyIndex];
      // Update each employee object to set the AddressId foreign key    
      return { ...employeeObj, CompanyId: company.id };
    });

    return Employee.bulkCreate(updatedEmployees);
  })
  .then((createdEmployees) => printRows("createdEmployees", createdEmployees))
  // Retrieve companies and use `include` to embed `address` and `employees`
  .then(() => {
    return Company.findAll({
      include: [
        { model: Address, as: "address" },
        { model: Employee, as: "employees" },
      ]
    })
  })
  .then((companiesWithAll) => printRows("companiesWithAll", companiesWithAll))
  .catch((err) => console.log(err));