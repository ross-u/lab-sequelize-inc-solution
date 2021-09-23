const { sequelize, User } = require("./db");
const { users } = require("./seed-data");
const { QueryTypes } = require("sequelize");

sequelize
  .authenticate()
  .then(() => console.log("Connected to the DB"))
  .then(() => sequelize.sync({ force: true }))
  .then(() => console.log("Re-synced the tables."))
  .then(() => User.bulkCreate(users))
  .then(() => {
    // 1. Execute a raw SQL query
    // SELECT rows in the User table
    return sequelize.query(
      `SELECT * FROM "User";`, 
      { type: QueryTypes.SELECT }
    );
  })
  .then((results) => console.log("results", results))
  .then(() => {
    // 2. Execute a raw SQL query
    // UPDATE rows in the User table where email is "maxime@mail.com"
    return sequelize.query(
      `UPDATE "User" SET email = 'max@ironhack.com' WHERE email='maxime@mail.com';`,
      { type: QueryTypes.UPDATE }
    );
  })
  .then((results2) => console.log("results2", results2))
  .then(() => {
    // 3. Execute a raw SQL query
    // SELECT rows in the User table, and only return the first found row
    return sequelize.query(
      `SELECT * FROM "User" WHERE first_name='Maxime' LIMIT 1;`,
      { type: QueryTypes.SELECT }
    );
  })
  .then((results3) => console.log("results3", results3))
  .catch((err) => console.log(err));