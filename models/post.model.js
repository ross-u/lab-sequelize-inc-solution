const { Sequelize } = require("sequelize");

module.exports = (sequelize) => {
  const Post = sequelize.define(
    "Post",
    {
      text: { type: Sequelize.STRING, len: [5, 280] },
      created: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
    },
    {
      tableName: "Post",
      createdAt: false,
      updatedAt: false,
    }
  );

  return Post;
};
