const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("database", "username", "password", {
  host: "localhost:3306",
  dialect: "mysql",
  username: process.env.username,
  password: process.env.password,
  database: "ligoAssement",
});


try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

return sequelize;