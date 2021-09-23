const { sequelize, Address, User } = require("./db");
const printRows = require("./utils/print-rows");

sequelize
  .authenticate()
  .then(() => console.log("Connected to the DB"))
  .then(() => sequelize.sync({ force: true }))
  .then(() => console.log("Dropped the tables and re-synced."))
  .then(() => {
    const addressObj = {
      street: "Southwest Eighth Street, 123",
      city: "Miami",
      country: "USA",
    };

    return Address.create(addressObj);
  })
  .then((createdAddress) => {
    printRows("createdAddress", createdAddress);
  
    const userObj = {
      first_name: "Ana",
      last_name: "Garcia",
      email: "ana@mail.com",
      AddressId: createdAddress.id,
    };

    return User.create(userObj);
  })
  .then((createdUser) => printRows("createdUser", createdUser))
  .then(() => {
    return User.findOne(
      { where: { first_name: "Ana" } },
      { include: "address" }
    );
  })
  .then((userWithAddress) => printRows("userWithAddress", userWithAddress))
  .then(() => {
    return User.findAll({ include: ["address"] })
  })
  .then((usersWithAddress) => printRows("usersWithAddress", usersWithAddress))
  .catch((err) => console.log(err));