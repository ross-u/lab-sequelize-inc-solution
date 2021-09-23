// Helper function that concisely logs the the Sequelize result objects

function printRows(message, value) {
  const stringifiedValue = JSON.stringify(value, null, 4);
  const jsonValue = JSON.parse(stringifiedValue);

  console.log("\n", message);
  console.dir(jsonValue, { depth: null });
}

module.exports = printRows;
