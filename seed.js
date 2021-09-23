const { sequelize, User, Address, Post } = require("./db");
const { users, addresses, posts } = require("./seed-data");
const printRows = require("./utils/print-rows");

sequelize
  .authenticate()
  .then(() => console.log("Connected to the DB"))
  .then(() => sequelize.sync({ force: true }))
  .then(() => console.log("Dropped the tables and re-synced."))
  .then(() => {
    // 1. Create rows in the `Address` table
    return Address.bulkCreate(addresses);
  })
  .then((createdAddresses) => {
    console.log(`Created ${createdAddresses.length} Address rows`);
  
    // 2. Update user objects to create a row association.
    // Set a foreign key `AddressId`
    const usersWithAddressId = users.map((userObj, i) => {
      return { ...userObj, AddressId: createdAddresses[i].id };
    });

    // 3. Create rows in the `User` table
    return User.bulkCreate(usersWithAddressId);
  })
  .then((createdUsers) => {
    console.log(`Created ${createdUsers.length} User rows`);

    // 4. Update post objects to create a row association.
    // Set a foreign key `UserId`
    const postsWithUserId = posts.map((postObj, i) => {
      const userIndex = i % 2;
      /*  
      userIndex will always be 0 or 1
        0 % 2 = 0
        1 % 2 = 1
        2 % 2 = 0
        3 % 2 = 1
      */
      const user = createdUsers[userIndex];
      return { ...postObj, UserId: user.id };
    });

    // 5. Create rows in the `Post` table
    return Post.bulkCreate(postsWithUserId);
  })
  .then((createdPosts) => {
    console.log(`Created ${createdPosts.length} Post rows`);
    console.log("Finished seeding the Database!");
  })
  .catch((err) => console.log(err));