const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize("SportsAnalsys", process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: "127.0.0.1",
  port:3306,
  dialect: "mysql",
});


sequelize.authenticate()
.then(()=>{console.log("Connection has been established successfully.")})
.catch((err)=>{console.error("Unable to connect to the database:", err)});


module.exports = sequelize;