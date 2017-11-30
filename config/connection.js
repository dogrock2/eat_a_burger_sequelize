const Sequelize = require("sequelize");

const connection = new Sequelize("burgers_db2", "alex", "password", {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

module.exports = connection;