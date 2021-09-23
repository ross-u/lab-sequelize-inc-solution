const { sequelize, User, Post } = require("./db");
const printRows = require("./utils/print-rows");

sequelize
  .authenticate()
  .then(() => console.log("Connected to the DB"))
  .then(() => sequelize.sync({ force: true }))
  .then(() => console.log("Dropped the tables and re-synced."))
  .then(() => {
    const userObj = {
      first_name: "Maxime",
      last_name: "Laurent",
      email: "maxime@mail.com",
    };

    return User.create(userObj);
  })
  .then((createdUser) => {
    printRows("createdUser", createdUser);

    const posts = [
      { text: "Bonjour Monde", UserId: createdUser.id },
      { text: "Chapeau!!!", UserId: createdUser.id },
    ];

    return Post.bulkCreate(posts);
  })
  .then((createdPosts) => printRows("createdPosts", createdPosts))
  .then(() => {
    return User.findOne({ where: { first_name: "Maxime" } }, { include: "posts" });
  })
  .then((userWithPosts) => printRows("userWithPosts", userWithPosts))
  .then(() => {
    return User.findAll({ include: ["posts"] });
  })
  .then((usersWithPosts) => printRows("usersWithPosts", usersWithPosts))
  .catch((err) => console.log(err));