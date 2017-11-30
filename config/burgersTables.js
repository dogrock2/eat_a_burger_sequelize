const Sequelize = require("sequelize");
const sequelize = require("./connection.js");

const Burgers = sequelize.define("burgers", {
    burgerName: Sequelize.STRING,
    devoured: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false }
});

Burgers.sync();

module.exports = Burgers;