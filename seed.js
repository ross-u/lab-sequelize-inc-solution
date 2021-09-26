const { sequelize, Company, Address, Employee } = require("./db");
const { company, address, employees } = require("./seed-data");
const printRows = require("./utils/print-rows");

sequelize
  .authenticate()
  .then(() => console.log("Connected to the DB"))
  .then(() => sequelize.sync({ force: true }))
  .then(() => console.log("Dropped to tables and re-synced."))
  // Iteration 4
  .then(() => Address.create(address))
  .then((createdAddress) => printRows("createdAddress", createdAddress))
  // Iteration 5
  .then(() => Address.findOne({ where: { company_name: "Apple" }}))
  .then((addressApple) => {
    // Create a row in the Company table using the updated company object
    const updatedCompany = { ...company, AddressId: addressApple.id  }
    return Company.create(updatedCompany);
  })
  .then((createdCompany) => printRows("createdCompany", createdCompany))
  // Iteration 6 - Retrieve company row and use `include` to embed the `address`
  .then(() => Company.findOne({ where: { company_name: "Apple" }, include: "address" }))
  .then((companyWithAddress) => printRows("companyWithAddress", companyWithAddress))
  // Iteration 7 - Create employees and link them with the company
  .then(() => Company.findOne({ where: { company_name: "Apple" }}))  
  .then(() => {
    // Update each employee object to set the `AddressId` foreign key  
    const updatedEmployees = employees.map((employeeObj) => {
      return { ...employeeObj, CompanyId: company.id };
    });

    return Employee.bulkCreate(updatedEmployees);
  })
  .then((createdEmployees) => printRows("createdEmployees", createdEmployees))
  // Iteration 8 - Retrieve company row and use include to embedded `address` and `employees`
  .then(() => {
    return Company.findOne({
      where: { company_name: "Apple" },
      include: [
        { model: Address, as: "address" },
        { model: Employee, as: "employees" },
      ]
    })
  })
  .then((companyWithAll) => printRows("companyWithAll", companyWithAll))
  .catch((err) => console.log(err));