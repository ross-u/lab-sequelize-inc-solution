const { sequelize, User, Address, Post } = require("./db");
const { users, addresses, posts } = require("./seed-data");
const printRows = require("./utils/print-rows");

sequelize
  .authenticate()
  .then(() => console.log("Connected to the DB"))
  .then(() => sequelize.sync({ force: true }))
  .then(() => console.log("Dropped to tables and re-synced."))
  .then(() => Address.bulkCreate(addresses))
  .then((createdAddresses) => {
    console.log(`Created ${createdAddresses.length} Address rows`);

    const usersWithAddressId = users.map((userObj, i) => {
      return { ...userObj, AddressId: createdAddresses[i].id };
    });

    return User.bulkCreate(usersWithAddressId);
  })
  .then((createdUsers) => {
    console.log(`Created ${createdUsers.length} User rows`);

    const postsWithUserId = posts.map((postObj, i) => {
      const userIndex = i % 2;
      const user = createdUsers[userIndex];
      return { ...postObj, UserId: user.id };
    });

    return Post.bulkCreate(postsWithUserId);
  })
  .then((createdPosts) => {
    console.log(`Created ${createdPosts.length} Post rows`);
    console.log("Finished Seeding the Database!");
  })
  // Examples: Using `include` to include associated rows in the result
  .then(() => {
    // Retrieve a single row and include associated rows

    // 1. Retrieve one user by `first_name` and include associated `posts`
    // return User.findOne({ where: { first_name: "Ana" }, include: "posts" });

    // 2. Retrieve one user by primary key and include associated `posts`
    // return User.findByPk(2, { include: "posts" });

    // 3. Retrieve all users and include associated `posts`
    // User.findAll({ include: ["posts"] });    

    // 4. Retrieve one user by `email` and include associated `posts` and `address`
    return User.findOne({
      where: { email: "maxime@mail.com" },
      include: [
        { model: Post, as: "posts" },
        { model: Address, as: "address" },
      ],
    });
  })
  .then((oneUser) => printRows("oneUser", oneUser))
  .then(() => {
    // 5. Retrieve all users and include associated `address` and `posts`
    return User.findAll({
      include: [
        { model: Address, as: "address" },
        { model: Post, as: "posts" },
      ],
    });
  })
  .then((usersWithAll) => printRows("usersWithAll", usersWithAll))
  .catch((err) => console.log(err));
